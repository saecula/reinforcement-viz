import React, { useContext } from 'react';
import { Box } from 'rebass';
import Ctx from '../MainCtx';

const ResultsGraph = () => {
  const { rewardsMatrix } = useContext(Ctx);
  return (
    <Box>
      <h2>rewards: {rewardsMatrix}</h2>
    </Box>
  );
};

export default ResultsGraph;
