import React from 'react';
import { Box } from 'rebass';

export const infoBoxCss = {
  background: '#ffffff !important',
  minWidth: '40%',
  flexBasis: 'auto',
  textAlign: 'center',
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 'auto',
  padding: '5px',
};

const alpha = 'α';
const gamma = 'γ';
const epsilon = 'ε';

const toGreek = (str) =>
  str === 'alpha'
    ? alpha
    : str === 'gamma'
    ? gamma
    : str === 'epsilon'
    ? epsilon
    : null;

const ScenarioInfo = (props) => {
  const { name, options } = props.scenario;
  const optionsString = Object.keys(options).reduce(
    (str, key) => str + ` ${toGreek(key)}: ${options[key]} `,
    ''
  );
  return (
    <Box css={infoBoxCss}>
      <h4>{name}</h4>
      <h5>{optionsString}</h5>
    </Box>
  );
};

export default ScenarioInfo;
