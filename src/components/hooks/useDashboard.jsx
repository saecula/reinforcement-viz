import { useState } from 'react';

// surely more will go here.

const useDashboard = () => {
  const [agentId, setAgentId] = useState(1);
  const [modalView, toggleModalView] = useState(false);

  const openForm = (id) => {
    setAgentId(id);
    toggleModalView(true);
  };
  const closeForm = () => toggleModalView(false);

  return {
    modalView,
    agentId,
    openForm,
    closeForm,
  };
};

export default useDashboard;
