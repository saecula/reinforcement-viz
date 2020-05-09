class Agent {
  constructor() {}
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
    this.epsilon = this.props.options.epsilon;
    this.gamma = this.props.options.gamma;
    this.getActionsForState = this.props.getActionsForState;
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
  actionValueFunction(state) {
    let actions = this.getActionsForState(state);
    const isRandom = () => Math.floor(this.epsilon / Math.random());

    if (isRandom) {
      let idx = Math.floor(Math.random() * Math.floor(actions.length));
      return actions[idx];
    } else {
    }
  }
}
