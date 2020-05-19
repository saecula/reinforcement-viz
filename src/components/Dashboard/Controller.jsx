import React, { useContext } from 'react';
import { Button } from 'rebass';
import Ctx from '../MainCtx';

const startButtonCss = {
  color: 'white',
  borderRadius: '20%',
  backgroundColor: '#32CD32',
  paddingLeft: '20px',
  paddingRight: '20px',
  margin: '5px',
};

const Controller = () => {
  const { start } = useContext(Ctx);
  return (
    <div>
      <Button onClick={start} css={startButtonCss}>
        start
      </Button>
    </div>
  );
};

export default Controller;
