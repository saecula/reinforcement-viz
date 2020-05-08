import React from 'react';
import { Box } from 'rebass';
import Title from './Title';
import Scenarios from './Scenarios/Scenarios';
import Dashboard from './Dashboard';
import { CtxProvider } from './MainCtx';

const css = {
  display: 'flex',
  width: '93%',
  height: '100%',
  padding: '10px',
  flexDirection: 'column',
  boxSizing: 'border-box',
};

function Main() {
  return (
    <Box css={css}>
      <CtxProvider>
        <Title />
        <Scenarios />
        <Dashboard />
      </CtxProvider>
    </Box>
  );
}

export default Main;
