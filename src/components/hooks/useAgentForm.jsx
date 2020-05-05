import { useState, useContext } from 'react';
import Ctx from '../MainCtx';
import ScenarioCtx from '../Scenarios/ScenarioCtx';
import { defaultValue } from '../../constants';

const useAgentForm = (agent) => {
  const { addScenario } = useContext(Ctx);
  const { closeForm } = useContext(ScenarioCtx);

  const [inputs, setInputs] = useState(
    agent.fields.reduce(
      (all, field) => ({ ...all, [field]: defaultValue[field] }),
      {}
    )
  );
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    const newAgent = {
      name: agent.name,
      options: { ...inputs },
    };
    addScenario(newAgent);
    closeForm();
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: parseFloat(value) });
  };

  return {
    handleSubmit,
    handleChange,
  };
};

export default useAgentForm;
