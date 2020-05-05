import React, { useContext } from 'react';
import { Button, Box } from 'rebass';
import ScenarioCtx from './ScenarioCtx';
import MainCtx from '../MainCtx';

const SingleScenario = (props) => {
  const { removeScenario } = useContext(MainCtx);
  const { openForm } = useContext(ScenarioCtx);
  const { key, name } = props.scenario;
  return (
    <Box padding="100px">
      <h1>{name}</h1>
      <Button
        color="black"
        onClick={() => {
          openForm();
        }}
      >
        new
      </Button>
      <h2>real fancy stuff goes here</h2>
      <Button color="black" onClick={() => removeScenario(key)}>
        x
      </Button>
    </Box>
  );
};

export default SingleScenario;
