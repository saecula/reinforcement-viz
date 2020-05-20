import {
  // CliffEnvironment,
  // TunnelEnvironment,
  // WindEnvironment,
  // CasinoEnvironment,
  B,
  O,
  R,
  G,
} from '../constants';

const averageOf = (arr) => arr.reduce((tot, x) => tot + x, 0) / arr.length;
// reactState:
// running: bool,
// rewards: []
export function runScenario(scenario, addToRewards, limit = 800) {
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
    let { state } = environment;

    let action;
    let steps = 0;

    let done = false;
    while (!done) {
      action = agent.act(state);
      let [newState, reward, newDone] = environment.step(action);
      done = newDone;
      agent.handleReward(state, action, reward);
      state = newState;
      steps++;
    }

    console.log('steps in this episode:', steps);

    const episodeResult = agent.calculateResult();
    addToRewards(episodeResult);
    environment.reset();
    runs++;

    if (runs < limit) {
      setTimeout(runEpisode(agent, environment), 10);
    } else {
      console.log(agent.actionValues);
    }
  };

  runEpisode();
}

export class TiniestEnv {
  constructor(props) {
    this.states = [
      [O, O, O, O],
      [R, O, O, O],
      [R, O, O, O],
      [R, O, O, G],
    ];
    this.visited = this.generateVisited();
    this.rewards = [
      [0, -1, -1, -1],
      [-1, -1, -1, -1],
      [-1, -1, -2, -2],
      [0, 0, -2, 17],
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
    const endingTileColor = G;
    const wallTileColor = B;
    this.states.forEach((stateRow, i) =>
      stateRow.forEach((state, j) => {
        const stateActions = [];
        if (state !== wallTileColor) {
          if (j > 0 && this.states[i][j - 1] !== wallTileColor) {
            stateActions.push(left);
          }
          if (j < limitJ && this.states[i][j + 1] !== wallTileColor) {
            stateActions.push(right);
          }
          if (i > 0 && this.states[i - 1][j] !== wallTileColor) {
            stateActions.push(up);
          }
          if (i < limitI && this.states[i + 1][j] !== wallTileColor) {
            stateActions.push(down);
          }
        }
        actionMap[i + ',' + j] = stateActions;
      })
    );
    return actionMap;
  }

  getActionsForState = (state) => {
    const [x, y] = state;
    return this.actionMap[x + ',' + y];
  };

  // state: int Array(2)
  // action: str
  step(action) {
    const { left, right, down, up } = this.actions;
    let [y, x] = this.state;
    if (action === up) {
      y = y - 1;
    } else if (action === down) {
      y = y + 1;
    } else if (action === right) {
      x = x + 1;
    } else if (action === left) {
      x = x - 1;
    } else {
      throw new Error('unknown step action', action);
    }

    this.state = [y, x];
    const done = this.states[y][x] === G;
    const reward = this.rewards[y][x];
    return [[y, x], reward, done];
  }
}

export class MonteCarloAgent {
  constructor(props) {
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
    const doRandomAction = () => this.epsilon > Math.random();
    const actions = this.getActionsForState(state);

    if (actions[0] === null) {
      return null;
    }
    //console.log('isNotRandom returns', isNotRandom());
    if (doRandomAction()) {
      //console.log('random');
      const idx = Math.floor(actions.length * Math.random());
      return actions[idx];
    } else {
      const mappedActions = actions.map((action) => ({
        name: action,
        value: this.actionValues[this.toKeyString(state, action)],
      }));
      const max = Math.max(...mappedActions.map((x) => x.value));
      const filtered = mappedActions.filter((x) => x.value >= max);
      const idx = Math.floor(filtered.length * Math.random());
      return filtered[idx].name;
    }
  }

  handleReward(state, action, reward, currentState) {
    this.rewardsList.push({
      state,
      action,
      reward,
    });
  }

  calculateResult() {
    const { rewardsList, returnsMap, actionValues, gamma } = this;
    let nextReturn = 0;

    for (let i = rewardsList.length - 1; i >= 0; --i) {
      const { state, action, reward } = rewardsList[i];

      const expectedReturn = reward + gamma * nextReturn;

      const key = this.toKeyString(state, action);
      console.log('____________', key, returnsMap, expectedReturn);
      returnsMap[key].push(expectedReturn);
      actionValues[key] = averageOf(returnsMap[key]);

      nextReturn = expectedReturn;
    }

    const episodeResult = rewardsList.reduce((tot, x) => tot + x.reward, 0);
    this.rewardsList = [];
    return episodeResult;
  }
}
