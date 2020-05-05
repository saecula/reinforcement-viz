//put in separate hook
import { useState } from 'react';
import { envs } from '../../constants';

const useMainView = () => {
  const [environment, setEnv] = useState(envs[0]);
  const [scenarios, setScenarios] = useState([
    { id: 1, name: 'Monte Carlo', env: environment },
  ]);

  const setEnvironment = (name) => {
    const newEnv = envs.find((e) => e.name === name);
    setEnv(newEnv);
    setScenarios((prev) => prev.map((a) => ({ ...a, env: newEnv })));
  };
  const addScenario = (a) =>
    setScenarios((prev) => [...prev, { ...a, env: environment }]);
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
