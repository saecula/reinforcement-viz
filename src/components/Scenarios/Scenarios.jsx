import React, { useContext } from 'react';
import { Box } from 'rebass';
import Ctx from '../MainCtx';
import { Select } from '@rebass/forms';
import ScenarioCtx from './ScenarioCtx';
import SingleScenario from './SingleScenario';
import useScenario from '../hooks/useScenario';
import AgentForm from './AgentForm';
import { envs } from '../../constants';
import { ScenarioViewer } from '../styles';
import Modal from './Modal';

const boxCss = {
  marginTop: '4em',
  display: 'flex',
  flexDirection: 'column',
};

const envFormCss = {
  alignItems: 'center',
  marginLeft: '4%',
};

const selectCss = {
  maxWidth: '20%',
  border: 'none',
  backgroundColor: '#fafafa',
  paddingRight: '5px',
  fontFamily: 'Helvetica',
};

const Scenarios = () => {
  const { scenarios, setEnvironment } = useContext(Ctx);
  const hooks = useScenario();
  return (
    <Box css={boxCss}>
      <ScenarioCtx.Provider value={hooks}>
        <Box as="form" css={envFormCss}>
          <Select
            css={selectCss}
            defaultValue={envs[0].name}
            onChange={(e) => setEnvironment(e.target.value)}
          >
            {envs.map((e, idx) => (
              <option key={idx}>{e.name}</option>
            ))}
          </Select>
        </Box>
        {hooks.modalView && (
          <Modal>
            <AgentForm />
          </Modal>
        )}
        <ScenarioViewer>
          {scenarios.map((s, i, arr) => (
            <SingleScenario key={i} idx={i} len={arr.length} scenario={s} />
          ))}
        </ScenarioViewer>
      </ScenarioCtx.Provider>
    </Box>
  );
};

export default Scenarios;
