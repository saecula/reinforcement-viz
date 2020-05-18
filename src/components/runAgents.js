import {
  // CliffEnvironment,
  // TunnelEnvironment,
  // WindEnvironment,
  // CasinoEnvironment,
  O,
  R,
} from '../constants';
import { averageOf } from './utils';

const generateEnv = (environment) => {
  let environmentInstance;
  switch (environment.key) {
    // case 'CLIFF': ..etc
    default: {
      environmentInstance = new TiniestEnv();
    }
  }
  return environmentInstance;
};
const generateAgent = (agent, states, getActionsForStates) => {
  let agentInstance;
  switch (agent.key) {
    // case 'MONTE_CARLO': ..etc
    default: {
      agentInstance = new MonteCarloAgent(states, getActionsForStates);
    }
  }
  return agentInstance;
};

export const runScenario = (env, agt, reactState) => {
  const environment = generateEnv(env);
  const { states, getActionsForState } = environment;
  const agent = generateAgent(agt, states, getActionsForState);

  const runEpisode = () => {
    const { state } = environment;
    let reward = 1;
    let action;

    while (reward) {
      action = agent.act(state);
      reward = environment.reward(action);
      agent.handleReward(state, action, reward);
    }

    const episodeReturn = agent.calculateReturn();
    reactState.rewards.push(episodeReturn);
    environment.reset();

    if (reactState.cancel) {
      setTimeout(runEpisode(agent, environment), 50);
    }
  };

  runEpisode();
};

export class TiniestEnv {
  constructor(props) {
    super(props);
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
    this.size = [this.states.length, this.states[0].length];
    this.actionMap = this.generateActionMap();
    this.actions = {
      left: 'left',
      right: 'right',
      down: 'down',
      up: 'up',
    };
  }

  reset() {
    this.state = [0, 0];
    this.visited = generateVisited();
  }

  generateVisited() {
    return [
      [null, null],
      [null, null],
    ];
  }

  generateActionMap() {
    const actionMap = {};
    const [left, right, down, up] = this.actions;
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
          if (i < limitI && this.states[i + i][j] !== B) {
            stateActions.push(down);
          }
        }
        actionMap[i + ',' + j] = stateActions;
      })
    );
    return actionMap;
  }

  getActionsForState(state) {
    const [x, y] = state;
    return this.actionMap[x + ',' + y];
  }

  // state: int Array(2)
  // action: str
  reward(action) {
    const [left, right, down, up] = this.actions;
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
  }
}

class MonteCarloAgent {
  constructor(props) {
    super(props);
    this.actionValues = this.actionValueFuncInit(
      props.allStates,
      props.getActionsForState
    );
    this.returnsMap = this.returnsMapInit(
      props.allStates,
      props.getActionsForState
    );
    this.rewardsList = [];
    this.epsilon = this.props.options.epsilon || null;
    this.gamma = this.props.options.gamma || null;
  }
  toKeyString(state, action) {
    const [y, x] = state;
    return `${y},${x}${action}`;
  }
  actionValueFuncInit(allStates, getActionsForState) {
    const actionValues = {};
    allStates.forEach((state) => {
      const actions = getActionsForState(state);
      actions.forEach((action) => {
        const key = this.toKeyString(state, action);
        actionValues[key] = 0;
      });
    });
    return actionValues;
  }
  returnsMapInit(allStates, getActionsForState) {
    const returnsMap = {};
    allStates.forEach((state) => {
      const actions = getActionsForState(state);
      actions.forEach((action) => {
        const key = this.toKeyString(state, action);
        returnsMap[key] = [];
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

  calculateReturn() {
    const { rewardsList, returnsMap, actionValues, gamma } = this;
    let nextReturn = 0;

    for (let i = rewardsList.length - 2; i >= 0; --i) {
      const { state, action } = rewardsList[i];
      const { reward } = rewardsList[i + 1];
      const expectedReturn = reward + gamma * nextReturn;

      const key = this.toKeyString(state, action);
      returnsMap[key].push(expectedReturn);
      actionValues[key] = averageOf(returnsMap[key]);

      nextState = state;
      nextAction = action;
      reward = rewardsList[i].reward;
      nextReturn = expectedReturn;
    }

    const episodeAverage = averageOf(rewardsList.map((o) => o.reward));
    this.rewardsList = [];
    return episodeAverage;
  }
}
