import React, { useContext } from 'react';
import { Box } from 'rebass';
import Ctx from '../MainCtx';

const ResultsGraph = () => {
  const { rewards } = useContext(Ctx);
  return (
    <Box>
      <h2>rewards: {rewards}</h2>
    </Box>
  );
};

export default ResultsGraph;
