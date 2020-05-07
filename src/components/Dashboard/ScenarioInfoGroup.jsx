import React, { useContext } from 'react';
import { Box } from 'rebass';
import MainCtx from '../MainCtx';
import ScenarioInfo from './ScenarioInfo';

const css = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  maxHeight: '10em',
};

const ScenarioInfoGroup = () => {
  const { scenarios } = useContext(MainCtx);
  return (
    <Box css={css}>
      {scenarios.map((scenario, idx) => (
        <ScenarioInfo key={idx} scenario={scenario} />
      ))}
    </Box>
  );
};

export default ScenarioInfoGroup;
