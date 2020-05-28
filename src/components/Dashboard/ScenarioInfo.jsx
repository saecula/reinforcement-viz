import React from 'react';
import { Box } from 'rebass';

export const infoBoxCss = {
  background: '#ffffff',
  width: '20%',
  height: '35%',
  textAlign: 'center',
  // flexGrow: 1,
  // flexShrink: 1,
  // flexBasis: 'auto',
  flex: 1,
  minWidth: '30%',
  minHeight: 0,
  overflow: 'hidden',
  margin: '15px',
};

const toGreek = (str) =>
  str === 'alpha'
    ? 'α'
    : str === 'gamma'
    ? 'γ'
    : str === 'epsilon'
    ? 'ε'
    : null;

const ScenarioInfo = (props) => {
  const { name, options } = props.scenario;
  const optionsString = Object.keys(options).reduce(
    (str, key) => str + ` ${toGreek(key)}: ${options[key]} `,
    ''
  );
  return (
    <Box css={infoBoxCss}>
      <h4 style={{ margin: '10px' }}>{name}</h4>
      <h5 style={{ margin: '10px' }}>{optionsString}</h5>
    </Box>
  );
};

export default ScenarioInfo;
