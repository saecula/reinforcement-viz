import { useState } from 'react';

// surely more will go here.

const useScenario = () => {
  const [modalView, toggleModalView] = useState(false);

  const openForm = () => {
    toggleModalView(true);
  };
  const closeForm = () => toggleModalView(false);

  return {
    modalView,
    openForm,
    closeForm,
  };
};

export default useScenario;
