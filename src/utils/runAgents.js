import {
  // CliffEnvironment,
  // TunnelEnvironment,
  // WindEnvironment,
  // CasinoEnvironment,
  B,
  O,
  R,
} from '../constants';

const averageOf = (arr) => arr.reduce((tot, x) => tot + x, 0) / arr.length;
// reactState:
// running: bool,
// rewards: []
export function runScenario(scenario, addToRewards, limit = 40) {
  const environment = new TiniestEnv();
  const { states, getActionsForState } = environment;
  const { options } = scenario;
  const agent = new MonteCarloAgent({
    allStates: states,
    getActionsForState,
    options,
  });
  let runs = 0;

  const runEpisode = () => {
    const { state } = environment;
    let reward = 1;
    let action;

    while (reward) {
      action = agent.act(state);
      reward = environment.reward(action);
      agent.handleReward(state, action, reward);
    }

    const episodeResult = agent.calculateResult();
    addToRewards(episodeResult);
    environment.reset();
    runs++;

    if (runs < limit) {
      setTimeout(runEpisode(agent, environment), 50);
    }
  };

  runEpisode();
}

export class TiniestEnv {
  constructor(props) {
    this.states = [
      [O, O],
      [R, O],
    ];
    this.visited = this.generateVisited();
    this.rewards = [
      [0, 1],
      [-1, 0],
    ];
    this.state = [0, 0];

    // put in general env class
    this.size = [this.states.length - 1, this.states[0].length - 1];
    this.actions = {
      left: 'left',
      right: 'right',
      down: 'down',
      up: 'up',
    };

    this.actionMap = this.generateActionMap();
  }

  generateVisited() {
    return [
      [null, null],
      [null, null],
    ];
  }
  reset() {
    this.state = [0, 0];
    this.visited = this.generateVisited();
  }

  generateActionMap() {
    const actionMap = {};
    const { left, right, down, up } = this.actions;
    const [limitI, limitJ] = this.size;

    this.states.forEach((stateRow, i) =>
      stateRow.forEach((state, j) => {
        const stateActions = [];
        if (state !== B) {
          if (j > 0 && this.states[i][j - 1] !== B) {
            stateActions.push(left);
          }
          if (j < limitJ && this.states[i][j + 1] !== B) {
            stateActions.push(right);
          }
          if (i > 0 && this.states[i - 1][j] !== B) {
            stateActions.push(up);
          }
          if (i < limitI && this.states[i + 1][j] !== B) {
            stateActions.push(down);
          }
        }
        actionMap[i + ',' + j] = stateActions;
      })
    );
    return actionMap;
  }

  getActionsForState = (state) => {
    console.log('state:', state);
    const [x, y] = state;
    console.log(x, ',', y);
    console.log('ehhhhh', this.actionMap, this.actionMap[x + ',' + y]);
    return this.actionMap[x + ',' + y];
  };

  // state: int Array(2)
  // action: str
  reward = (action) => {
    const [left, right, down, up] = this.actions;
    const [x, y] = this.state;
    switch (action) {
      case left: {
        this.state[1] -= 1;
        break;
      }
      case right: {
        this.state[1] += 1;
        break;
      }
      case up: {
        if (y === 0 && x === 1) {
          this.state = null; // end scenario
        } else {
          this.state[0] -= 1;
        }
        break;
      }
      case down: {
        this.state[0] += 1;
        break;
      }
      default: {
        throw new Error('unknown step action', action);
      }
    }

    let [newY, newX] = this.state;
    const reward = this.state ? this.rewards[newY][newX] : null;
    return reward;
  };
}

export class MonteCarloAgent {
  constructor(props) {
    console.log('PROPS', props);
    this.actionValues = this.actionValueFuncInit(
      props.allStates,
      props.getActionsForState
    );
    this.returnsMap = this.returnsMapInit(
      props.allStates,
      props.getActionsForState
    );
    this.rewardsList = [];
    this.epsilon = props.options.epsilon || null;
    this.gamma = props.options.gamma || null;
    this.getActionsForState = props.getActionsForState;
  }
  toKeyString(state, action) {
    const [y, x] = state;
    return `${y},${x}${action}`;
  }
  actionValueFuncInit(allStates, getActionsForState) {
    const actionValues = {};
    console.log('allstates...', allStates);
    allStates.forEach((stateRow, i) => {
      stateRow.forEach((_, j) => {
        const actions = getActionsForState([i, j]);
        actions.forEach((action) => {
          const key = this.toKeyString([i, j], action);
          actionValues[key] = 0;
        });
      });
    });
    return actionValues;
  }
  returnsMapInit(allStates, getActionsForState) {
    const returnsMap = {};
    allStates.forEach((stateRow, i) => {
      stateRow.forEach((_, j) => {
        const actions = getActionsForState([i, j]);
        actions.forEach((action) => {
          const key = this.toKeyString([i, j], action);
          returnsMap[key] = [];
        });
      });
    });
    return returnsMap;
  }

  act(state) {
    const isRandomAction = () => Math.floor(this.epsilon / Math.random());
    const actions = this.getActionsForState(state);

    if (isRandomAction()) {
      const idx = Math.floor(actions.length * Math.random());
      return actions[idx];
    } else {
      const mappedActions = actions.map((action) => ({
        name: action,
        value: this.actionValues[this.toKeyString(state, action)],
      }));
      return mappedActions.sort((a, b) => b.value - a.value)[0].name;
    }
  }

  handleReward(state, action, reward) {
    this.rewardsList.push({
      state,
      action,
      reward,
    });
  }

  calculateResult() {
    const { rewardsList, returnsMap, actionValues, gamma } = this;
    let nextReturn = 0;
    let reward = rewardsList[rewardsList.length - 1].reward;

    for (let i = rewardsList.length - 2; i >= 0; --i) {
      const { state, action } = rewardsList[i];
      const expectedReturn = reward + gamma * nextReturn;

      const key = this.toKeyString(state, action);
      returnsMap[key].push(expectedReturn);
      actionValues[key] = averageOf(returnsMap[key]);

      reward = rewardsList[i].reward;
      nextReturn = expectedReturn;
    }

    const episodeResult = rewardsList.reduce((tot, x) => tot + x.reward, 0);
    this.rewardsList = [];
    return episodeResult;
  }
}
