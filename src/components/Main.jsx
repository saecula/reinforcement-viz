import React from 'react';
import { Box } from 'rebass';
import Title from './Title';
import Scenarios from './Scenarios/Scenarios';
import Dashboard from './Dashboard';
import { CtxProvider } from './MainCtx';

const css = {
  display: 'flex',
  width: '100%',
  height: '100%',
  maxHeight: '100%',
  flexDirection: 'column',
};

function Main() {
  return (
    <CtxProvider>
      <Box css={css}>
        <Title />
        <Scenarios />
        <Dashboard />
      </Box>
    </CtxProvider>
  );
}

export default Main;
