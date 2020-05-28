import {
  // CliffEnvironment,
  // TunnelEnvironment,
  // WindEnvironment,
  // CasinoEnvironment,
  TiniestEnv,
  // SARSAagent,
  // QLearningAgent,
  // DoubleQLearningAgent,
  MonteCarloAgent,
} from '../constants';

export function runScenario(scenario, addToGraph, limit = 40) {
  const environment = new TiniestEnv();
  const { grid, getActionsForState } = environment;
  const { options } = scenario;
  const agent = new MonteCarloAgent({
    allStates: grid,
    getActionsForState,
    options,
  });
  let runs = 0;

  const runEpisode = () => {
    let { state } = environment;
    let action;

    let done = false;
    while (!done) {
      action = agent.act(state);
      let [newState, reward, newDone] = environment.step(action);
      done = newDone;
      agent.handleReward(state, action, reward);
      state = newState;
    }

    const episodeResult = agent.calculateResult();
    addToGraph(episodeResult);
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
