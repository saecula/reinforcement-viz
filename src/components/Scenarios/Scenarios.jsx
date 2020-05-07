import React, { useContext } from 'react';
import { Box } from 'rebass';
import Ctx from '../MainCtx';
import { Label, Select } from '@rebass/forms';
import ScenarioCtx from './ScenarioCtx';
import SingleScenario from './SingleScenario';
import useScenario from '../hooks/useScenario';
import AgentForm from './AgentForm';
import { envs } from '../../constants';
import { ScenarioViewer } from '../styles';
import Modal from './Modal';

const css = {
  display: 'flex',
  flexDirection: 'column',
};

const Scenarios = () => {
  const { scenarios, setEnvironment } = useContext(Ctx);
  const hooks = useScenario();
  console.log('scenarios:', scenarios);
  return (
    <Box css={css}>
      <ScenarioCtx.Provider value={hooks}>
        <Box as="form">
          <Label>choose an environment</Label>
          <Select
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
          {scenarios.map((s, i) => (
            <SingleScenario key={i} scenario={s} />
          ))}
        </ScenarioViewer>
      </ScenarioCtx.Provider>
    </Box>
  );
};

export default Scenarios;
