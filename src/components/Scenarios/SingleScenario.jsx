import React, { useContext } from 'react';
import { Button } from 'rebass';
import { ScenarioBox } from '../styles';
import ScenarioCtx from './ScenarioCtx';
import MainCtx from '../MainCtx';

const SingleScenario = (props) => {
  const { removeScenario } = useContext(MainCtx);
  const { openForm } = useContext(ScenarioCtx);
  const { id, name } = props.scenario;
  return (
    <ScenarioBox id="scenario-box">
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
      <Button color="black" onClick={() => removeScenario(id)}>
        x
      </Button>
    </ScenarioBox>
  );
};

export default SingleScenario;
