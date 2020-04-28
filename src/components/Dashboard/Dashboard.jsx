import React, { useState } from 'react';
import AgentForm from '../Agent/AgentForm';
import { Box, Flex } from 'rebass';
import Controller from './Controller';
import AgentList from './AgentList';
import ResultsGraph from './ResultsGraph';

const Dashboard = () => {
  const [addAgent, setAddAgent] = useState({ id: null });
  return (
    <Box>
      {addAgent.id ? (
        <AgentForm id={addAgent.id} />
      ) : (
        <Flex>
          <Controller />
          <AgentList />
          <ResultsGraph />
        </Flex>
      )}
    </Box>
  );
};

export default Dashboard;
