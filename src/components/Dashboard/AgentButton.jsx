import React, { useContext } from 'react';
import { Button } from 'rebass';
import DashboardCtx from '../Dashboard/DashboardCtx';

const AgentButton = (props) => {
  const { openForm } = useContext(DashboardCtx);
  const { id, name } = props.agent;
  return (
    <Button color="black" onClick={() => openForm(id)}>
      {name}
    </Button>
  );
};

export default AgentButton;
