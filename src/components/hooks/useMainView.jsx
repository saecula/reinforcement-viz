//put in separate hook
import { useState, useEffect } from 'react';
import { envs, initialScenario } from '../../constants';

const isValid = (s) => (s !== '[object Object]' ? s : false);

const useMainView = () => {
  const e = localStorage.getItem('environment');
  const s = localStorage.getItem('scenarios');
  const localEnv = isValid(e) ? JSON.parse(e) : null;
  const localScenario = isValid(s) ? JSON.parse(s) : null;

  const [environment, setEnv] = useState(localEnv ? localEnv : envs[0]);
  const [scenarios, setScenarios] = useState(
    localScenario.length
      ? localScenario
      : [{ ...initialScenario, env: environment }]
  );

  useEffect(() => {
    localStorage.setItem('environment', JSON.stringify(environment));
    localStorage.setItem('scenarios', JSON.stringify(scenarios));
  }, [environment, scenarios]);

  const setEnvironment = (name) => {
    const newEnv = envs.find((e) => e.name === name);
    setEnv(newEnv);
    setScenarios((prev) => prev.map((a) => ({ ...a, env: newEnv })));
  };
  const addScenario = (a) =>
    setScenarios((prev) => [...prev, { ...a, env: environment }]);
  const removeScenario = (key) => {
    if (scenarios.length > 1)
      setScenarios((prev) => prev.filter((a) => a.key !== key));
  };

  return {
    environment,
    scenarios,
    setEnvironment,
    addScenario,
    removeScenario,
  };
};

export default useMainView;
