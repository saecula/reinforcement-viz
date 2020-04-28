import React, { useContext } from 'react';
import { Box } from 'rebass';
import Agent from './Agent';
import AgentForm from './Agent/AgentForm';
import TopContext from './TopContext';

const ScenarioView = () => {
  const { agents, setAgents } = useContext(TopContext);
  const addAgent = (newAgent) => setAgents([...agents, newAgent]);
  console.log('agents: ', agents);
  return (
    <Box>
      {agents.map((a, i) => (
        <Agent key={i} agent={a} />
      ))}
      <AgentForm addAgent={addAgent} />
    </Box>
  );
};

export default ScenarioView;
