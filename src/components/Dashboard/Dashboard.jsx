import React from 'react';
import { Flex } from 'rebass';
import Controller from './Controller';
import ResultsGraph from './ResultsGraph';
import ScenarioInfoGroup from './ScenarioInfoGroup';
import useDashboard from '../hooks/useDashboard';
import DashboardCtx from './DashboardCtx';

const dashCss = {
  position: 'fixed',
  bottom: '0px',
  justifyContent: 'space-around',
  width: '90%',
};

const Dashboard = () => {
  const hooks = useDashboard();
  return (
    <div>
      <DashboardCtx.Provider value={hooks}>
        <Flex css={dashCss}>
          <Controller />
          <ScenarioInfoGroup />
          <ResultsGraph />
        </Flex>
      </DashboardCtx.Provider>
    </div>
  );
};

export default Dashboard;
