import { v4 as uuid } from 'uuid';
import { useState, useEffect } from 'react';
import { envs, initialScenario } from '../../constants';
import { runScenario } from '../../utils/runAgents';

const isValid = (s) => (s !== '[object Object]' ? s : false);

const useMainView = () => {
  const e = localStorage.getItem('environment');
  const s = localStorage.getItem('scenarios');
  const localEnv = isValid(e) ? JSON.parse(e) : null;
  const localScenario = isValid(s) ? JSON.parse(s) : null;

  const [environment, setEnv] = useState(localEnv || envs[0]);
  const [scenarios, setScenarios] = useState(
    localScenario.length
      ? localScenario
      : [{ ...initialScenario, env: environment }]
  );
  const [running, toggleRun] = useState(false);
  const [rewardsMatrix, setRewardsMatrix] = useState([[], [], [], []]);

  const addToRewards = (idx) => (value) =>
    setRewardsMatrix((prev) =>
      prev.map((arr, i) => (i === idx ? [...arr, value] : arr))
    );

  const start = () => {
    toggleRun(true);
    scenarios.forEach((scenario, idx) => {
      runScenario(scenario, addToRewards(idx));
    });
  };

  console.log(scenarios);
  useEffect(() => {
    localStorage.setItem('environment', JSON.stringify(environment));
    localStorage.setItem('scenarios', JSON.stringify(scenarios));
  }, [environment, scenarios]);

  const setEnvironment = (name) => {
    const newEnv = envs.find((e) => e.name === name);
    setEnv(newEnv);
    setScenarios((prev) => prev.map((a) => ({ ...a, env: newEnv })));
  };
  const addScenario = (s) => {
    if (scenarios.length < 4)
      setScenarios((prev) => [...prev, { ...s, id: uuid(), env: environment }]);
  };
  const removeScenario = (id) => {
    if (scenarios.length > 1)
      setScenarios((prev) => prev.filter((a) => a.id !== id));
  };

  return {
    environment,
    scenarios,
    running,
    start,
    rewardsMatrix,
    setEnvironment,
    addScenario,
    removeScenario,
  };
};

export default useMainView;
