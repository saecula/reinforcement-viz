//put in separate hook
import { useState } from 'react';
import { envs, initialScenario } from '../../constants';

const useMainView = () => {
  const [environment, setEnv] = useState(envs[0]);
  const [scenarios, setScenarios] = useState([
    { ...initialScenario, env: environment },
  ]);

  const setEnvironment = (name) => {
    const newEnv = envs.find((e) => e.name === name);
    setEnv(newEnv);
    setScenarios((prev) => prev.map((a) => ({ ...a, env: newEnv })));
  };
  const addScenario = (a) =>
    setScenarios((prev) => [...prev, { ...a, env: environment }]);
  const removeScenario = (key) =>
    setScenarios((prev) => prev.filter((a) => a.key !== key));

  return {
    environment,
    scenarios,
    setEnvironment,
    addScenario,
    removeScenario,
  };
};

export default useMainView;
