import React, { useContext, useEffect } from 'react';
import { Box } from 'rebass';
import SingleScenario from './SingleScenario';
import Ctx from '../MainCtx';
import { envs } from '../../constants';
import { Label, Select } from '@rebass/forms';

const Scenarios = () => {
  const { scenarios, environment, setEnvironment } = useContext(Ctx);

  useEffect(() => console.log('env!', environment, 'scenarios:', scenarios), [
    environment,
    scenarios,
  ]);
  return (
    <Box style={{ padding: '200px' }}>
      <Box as="form">
        <Label>choose an environment</Label>
        <Select
          defaultValue={envs[0].name}
          onChange={(e) => setEnvironment(e.target.value)}
        >
          {envs.map((e) => (
            <option>{e.name}</option>
          ))}
        </Select>
      </Box>
      {scenarios.map((s, i) => (
        <SingleScenario key={i} scenario={s} />
      ))}
    </Box>
  );
};

export default Scenarios;
