import React from 'react';
import { Box } from 'rebass';

const Agent = (props) => {
  const { key } = props.agent;
  return <Box>{key}</Box>;
};

export default Agent;
