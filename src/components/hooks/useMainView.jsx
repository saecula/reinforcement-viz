//put in separate hook
import { useState } from 'react';
import { envs } from '../../constants';

const useMainView = () => {
  const [environment, setEnv] = useState(envs[0]);
  const [scenarios, setScenarios] = useState([]);

  const setEnvironment = (name) => {
    const newEnv = envs.find((e) => e.name === name);
    setEnv(newEnv);
    setScenarios((prev) => prev.map((a) => ({ ...a, env: newEnv })));
  };
  const addScenario = (a) =>
    setScenarios((prev) => [
      ...prev,
      { ...a, id: scenarios.length, env: environment },
    ]);
  const removeScenario = (id) =>
    setScenarios((prev) => prev.filter((a) => a.id !== id));

  return {
    environment,
    scenarios,
    setEnvironment,
    addScenario,
    removeScenario,
  };
};

export default useMainView;
