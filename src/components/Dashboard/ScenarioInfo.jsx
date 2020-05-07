import React from 'react';
import { Box } from 'rebass';

const ScenarioInfo = (props) => {
  const { name, options } = props.scenario;
  const optionsString = options
    ? Object.keys(options).reduce(
        (str, key) => str + ` ${key}: ${options[key]}`,
        ''
      )
    : null;
  return (
    <Box style={{ padding: '5px' }}>
      <h5>
        {name}: {optionsString}
      </h5>
    </Box>
  );
};

export default ScenarioInfo;
