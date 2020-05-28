import React from 'react';
import { Flex } from 'rebass';
import Controller from './Controller';
import ResultsGraph from './ResultsGraph';
import ScenarioInfoGroup from './ScenarioInfoGroup';
import useDashboard from '../hooks/useDashboard';
import DashboardCtx from './DashboardCtx';

const dashCss = {
  // position: 'fixed',
  bottom: '0px',
  justifyContent: 'space-around',
  width: '100%',
  display: 'flex',
  flex: 1,
  minWidth: 0,
  minHeight: 0,
  overflow: 'hidden',
  marginBottom: '10px',
  marginTop: '10px',
};

const Dashboard = () => {
  const hooks = useDashboard();
  return (
    <Flex css={dashCss}>
      <DashboardCtx.Provider value={hooks}>
        <Controller />
        <ScenarioInfoGroup />
        <ResultsGraph />
      </DashboardCtx.Provider>
    </Flex>
  );
};

export default Dashboard;
