import { useState, useContext } from 'react';
import Ctx from '../MainCtx';
import ScenarioCtx from '../Scenarios/ScenarioCtx';
import { defaultValue, agentsList } from '../../constants';

const inputsFrom = (agent) =>
  agent.fields.reduce(
    (allFields, field) => ({ ...allFields, [field]: defaultValue[field] }),
    {}
  );

const useAgentForm = () => {
  const { addScenario } = useContext(Ctx);
  const { closeForm } = useContext(ScenarioCtx);

  const [agent, setAgent] = useState(agentsList[0]);
  const [inputs, setInputs] = useState(inputsFrom(agent));

  const handleAgentChange = (event) => {
    const { value } = event.target;
    const newAgent = agentsList.find((a) => a.key === value);
    setAgent(newAgent);
    setInputs(inputsFrom(newAgent));
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: parseFloat(value) });
  };
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    const newScenario = {
      name: agent.name,
      options: { ...inputs },
      class: agent.class,
    };
    addScenario(newScenario);
    closeForm();
  };

  return {
    agent,
    handleAgentChange,
    handleChange,
    handleSubmit,
  };
};

export default useAgentForm;
