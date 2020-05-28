import React, { useContext } from 'react';
import { Box } from 'rebass';
import Ctx from '../MainCtx';
import { Select, Input, Label } from '@rebass/forms';
import ScenarioCtx from './ScenarioCtx';
import SingleScenario from './SingleScenario';
import useScenario from '../hooks/useScenario';
import AgentForm from './AgentForm';
import { envs } from '../../constants';
import { ScenarioViewer } from '../styles';
import Modal from './Modal';

const boxCss = {
  padding: '15px',
  flexDirection: 'column',
  width: '100%',
  flex: 2,
};

const envFormCss = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  padding: '2px',
};

const selectCss = {
  minWidth: '100px',
  border: 'none',
  backgroundColor: '#fafafa',
  color: '#484848',
  fontFamily: 'Helvetica',
};

const Scenarios = () => {
  const { scenarios, setEnvironment, setEpisodes } = useContext(Ctx);
  const hooks = useScenario();
  return (
    <Box css={boxCss}>
      <ScenarioCtx.Provider value={hooks}>
        <Box css={envFormCss}>
          <Box>
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
          <Box pl={5} style={{ display: 'flex', textAlign: 'center' }}>
            <Label style={{ marginTop: '10px' }}>Number of Episodes:</Label>
            <Input
              css={selectCss}
              onChange={(e) => setEpisodes(e.target.value)}
            />
          </Box>
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
