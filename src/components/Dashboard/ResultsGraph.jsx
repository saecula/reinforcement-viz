import React, { useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { Box } from 'rebass';
import Ctx from '../MainCtx';

const css = {
  minWidth: '40%',
  marginBottom: '15px',
};

const ResultsGraph = () => {
  const { rewardsMatrix, numberOfRuns } = useContext(Ctx);
  console.log('results:', rewardsMatrix[0]);
  const state = {
    labels: Array(numberOfRuns)
      .fill(0)
      .map((_, idx) => idx + 1),
    datasets: [
      {
        label: 'Rewards trend',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: rewardsMatrix[0],
      },
    ],
  };
  return (
    <Box css={css}>
      <Line
        data={state}
        options={{
          title: {
            display: true,
            text: 'rewards trend',
            fontSize: 20,
          },
          legend: {
            display: false,
          },
        }}
      />
    </Box>
  );
};

export default ResultsGraph;
