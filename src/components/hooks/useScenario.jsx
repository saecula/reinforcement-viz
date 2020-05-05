import { useState } from 'react';

// surely more will go here.

const useScenario = () => {
  const [agentId, setAgentId] = useState(1); // todo: change to agentKey
  const [modalView, toggleModalView] = useState(false);

  const openForm = (id) => {
    setAgentId(id);
    toggleModalView(true);
  };
  const closeForm = () => toggleModalView(false);

  return {
    modalView,
    agentId,
    setAgentId,
    openForm,
    closeForm,
  };
};

export default useScenario;
