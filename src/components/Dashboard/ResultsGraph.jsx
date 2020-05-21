import React, { useContext } from 'react';
import { Box } from 'rebass';
import Ctx from '../MainCtx';

const css = {
  maxWidth: '15%',
};

const ResultsGraph = () => {
  const { rewardsMatrix } = useContext(Ctx);
  return (
    <Box css={css}>
      <h2 fontFamily={'Helvetica'} color={'darkgrey'}>
        results: {rewardsMatrix[0].length ? 'bingo!' : 'press start...'}
      </h2>
    </Box>
  );
};

export default ResultsGraph;
