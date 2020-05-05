import React, { useContext } from 'react';
import { Box } from 'rebass';
import MainCtx from '../MainCtx';
import ScenarioInfo from './ScenarioInfo';

const ScenarioInfoGroup = () => {
  const { scenarios } = useContext(MainCtx);
  return (
    <Box>
      {scenarios.map((scenario, idx) => (
        <ScenarioInfo key={idx} scenario={scenario} />
      ))}
    </Box>
  );
};

export default ScenarioInfoGroup;
