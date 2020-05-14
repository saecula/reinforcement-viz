class ScenarioRuntimeView {
  constructor(props) {
    this.location = props.env.startingCoords;
    this.grid = this.initializeGrid(props.env);
  }

  initializeGrid(env) {}
}

class TiniestEnv {
  constructor(props) {
    super(props);
    this.states = [
      [1, 2],
      [3, 4],
    ];
    this.rewards = [
      [-1, 1],
      [0, -1],
    ];
    this.actions = {
      left: 'left',
      right: 'right',
      down: 'down',
      up: 'up',
    };
  }

  getActionsFunc(state) {
    const [left, right, down, up] = this.actions;
    switch (state) {
      case 1: {
        return [right, down];
      }
      case 2: {
        return [up, left, down];
      }
      case 3: {
        return [up, right];
      }
      case 4: {
        return [up, left];
      }
    }
  }

  stepChange(action) {
    const [left, right, down, up] = this.actions;
    let [y, x] = this.agentCoords;
    let newState;
    switch (action) {
      case left: {
        newState = [y, x - 1];
        break;
      }
      case right: {
        newState = [y, x + 1];
        break;
      }
      case up: {
        if (y === 0 && x === 1) {
          newState = null;
        } else {
          newState = [y - 1, x];
        }
        break;
      }
      case down: {
        newState = [y + 1, x];
        break;
      }
      default: {
        newState = [y, x];
      }
    }
    // has to be a null newstate option
    let [newY, newX] = newState;
    const reward = this.rewards[newY][newX];
    this.agentCoords = newState;
    return [newState, reward];
  }
}

class Agent {
  constructor(props) {
    this.env = props.env;
  }
}

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
