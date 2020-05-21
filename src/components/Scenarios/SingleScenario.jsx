import React, { useContext } from 'react';
import { Button } from 'rebass';
import { ScenarioBox, OuterScenarioBox } from '../styles';
import ScenarioCtx from './ScenarioCtx';
import MainCtx from '../MainCtx';
import Grid from './Grid';

const AddButtonCss = {
  color: 'white',
  borderRadius: '50%',
  backgroundColor: 'lightGray',
  paddingLeft: '13px',
  paddingRight: '13px',
  position: 'absolute',
  right: '10%',
};

const SingleScenario = (props) => {
  const { removeScenario } = useContext(MainCtx);
  const { openForm } = useContext(ScenarioCtx);
  const { id, env } = props.scenario;
  const { idx, len } = props;
  console.log('here is scenario', props.scenario);
  return (
    <OuterScenarioBox>
      {idx === len - 1 && len < 4 && (
        <Button
          css={AddButtonCss}
          onClick={() => {
            openForm();
          }}
        >
          +
        </Button>
      )}
      <ScenarioBox id="scenario-box">
        <Grid env={env} />
        <Button color="black" onClick={() => removeScenario(id)}>
          x
        </Button>
      </ScenarioBox>
    </OuterScenarioBox>
  );
};

export default SingleScenario;
