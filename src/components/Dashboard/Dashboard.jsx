import React from 'react';
import { Flex } from 'rebass';
import Controller from './Controller';
import ResultsGraph from './ResultsGraph';
import AgentButtonGroup from './AgentButtonGroup';
import AgentForm from './AgentForm';
import useDashboard from '../hooks/useDashboard';
import DashboardCtx from './DashboardCtx';

const Dashboard = () => {
  const hooks = useDashboard();
  return (
    <div>
      <DashboardCtx.Provider value={hooks}>
        {hooks.modalView && <AgentForm />}
        <Flex justifyContent="space-around">
          <Controller />
          <AgentButtonGroup />
          <ResultsGraph />
        </Flex>
      </DashboardCtx.Provider>
    </div>
  );
};

export default Dashboard;
