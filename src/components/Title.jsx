import React from 'react';
import { Box } from 'rebass';

const css = {
  padding: '10px',
  alignText: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Helvetica',
  fontSize: '1.7em',
  color: 'white',
  backgroundColor: 'darkgrey',
  marginColor: 'darkgrey',
  top: '0px',
  left: '0px',
  width: '100%',
  flex: 0.04,
};

const Title = () => {
  return <Box style={css}>Reinforcement Viz</Box>;
};

export default Title;
