import React from 'react';
import { Box } from 'rebass';

const ScenarioInfo = (props) => {
  const { name, env } = props.scenario;
  return (
    <Box style={{ padding: '3em' }}>
      <h3>{name}</h3>
      <h5>{env.name}</h5>
    </Box>
  );
};

export default ScenarioInfo;
