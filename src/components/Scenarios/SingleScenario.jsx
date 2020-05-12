import React, { useContext } from 'react';
import { Button } from 'rebass';
import { ScenarioBox, OuterScenarioBox } from '../styles';
import ScenarioCtx from './ScenarioCtx';
import MainCtx from '../MainCtx';

const AddButtonCss = {
  color: 'white',
  borderRadius: '50%',
  backgroundColor: 'lightGray',
  paddingLeft: '13px',
  paddingRight: '13px',
};

const SingleScenario = (props) => {
  const { removeScenario } = useContext(MainCtx);
  const { openForm } = useContext(ScenarioCtx);
  const { id, name } = props.scenario;
  const { idx, len } = props;

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
        <h1>{name}</h1>
        <Button color="black" onClick={() => removeScenario(id)}>
          x
        </Button>
      </ScenarioBox>
    </OuterScenarioBox>
  );
};

export default SingleScenario;
