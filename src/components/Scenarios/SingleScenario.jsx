import React, { useContext } from 'react';
import { Box, Button } from 'rebass';
import Ctx from '../MainCtx';

const SingleScenario = (props) => {
  const { removeScenario } = useContext(Ctx);
  const { name, id } = props.scenario;
  return (
    <Box style={{ padding: '3em' }}>
      <h1>{name}</h1>
      <Button color="black" onClick={() => removeScenario(id)}>
        x
      </Button>
    </Box>
  );
};

export default SingleScenario;
