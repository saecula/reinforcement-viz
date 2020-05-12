const environments = {
  one: {},
  another: {},
  casino: {},
  tinyEnv: {
    agentCoords: [0, 0],
    states: [
      [1, 2],
      [3, 4],
    ],
    rewards: [
      [-1, 1],
      [0, -1],
    ],
    stepChange(action) {
      let [y, x] = this.agentCoords;
      let newState;
      switch (action) {
        case 'left': {
          newState = [y, x - 1];
          break;
        }
        case 'right': {
          newState = [y, x + 1];
          break;
        }
        case 'up': {
          newState = [y - 1, x];
          break;
        }
        case 'down': {
          newState = [y + 1, x];
          break;
        }
        default: {
          newState = [y, x];
        }
      }
      let [newY, newX] = newState;
      const reward = this.rewards[newY][newX];
      this.agentCoords = newState;
      return [newState, reward];
    },
  },
};

class Agent {
  constructor(props) {
    this.env = props.env;
  }
}

/*** 
props: {
    allStates: [],
    getActionsForState: () => [],
    options: {
        gamma,
        epsilon,
    }
}
***/

class MonteCarloAgent extends Agent {
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
    this.epsilon = this.props.options.epsilon;
    this.gamma = this.props.options.gamma;
    this.getActionsForState = props.getActionsForState;
  }
  actionValueFuncInit(allStates, getActionsForState) {
    const actionValues = {};
    allStates.forEach((state) => {
      const actions = getActionsForState(state);
      actions.forEach((action) => {
        actionValues[state + action] = 0;
      });
    });
    return actionValues;
  }
  returnsMapInit(allStates, getActionsForState) {
    const returnsMap = {};
    allStates.forEach((state) => {
      const actions = getActionsForState(state);
      actions.forEach((action) => {
        returnsMap[state + action] = [];
      });
    });
    return returnsMap;
  }

  step(state) {
    let actions = this.getActionsForState(state);

    // todo: for now it is completely random
    // const isRandom = () => Math.floor(this.epsilon / Math.random());

    let idx = Math.floor(actions.length * Math.random());
    let action = actions[idx];

    let [newState, reward] = this.env.stepChange(action);
    this.actionValues[state + action] = reward;

    if (newState) {
      this.step(newState); // if not end state
    }
  }
}
