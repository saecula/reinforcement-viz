import React, { useContext } from 'react';
import Ctx from '../MainCtx';
import { Box } from 'rebass';

const Grid = () => {
  const { environment } = useContext(Ctx);
  console.log('environment', environment);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {environment.states.map((row, idx) => (
        <GridRow key={idx} row={row} />
      ))}
    </div>
  );
};

const GridRow = (props) => {
  const { row } = props;
  return (
    <div
      style={{
        maxHeight: '10%',
        flexBasis: 'auto',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {row.map((blockType, idx) => (
        <GridBlock key={idx} blockType={blockType} />
      ))}
    </div>
  );
};

const GridBlock = (props) => {
  const { blockType } = props;
  return (
    <Box
      style={{
        backgroundColor: blockType,
        border: '1px solid gray',
        padding: '7px',
        maxWidth: '10%',
      }}
    ></Box>
  );
};

export default Grid;
