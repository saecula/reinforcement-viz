import React from 'react';
import Scenarios from './Scenarios/Scenarios';
import Dashboard from './Dashboard';
import { CtxProvider } from './MainCtx';
import { Box } from 'rebass';

function Main() {
  return (
    <Box>
      <CtxProvider>
        <Scenarios />
        <Dashboard />
      </CtxProvider>
    </Box>
  );
}

export default Main;
