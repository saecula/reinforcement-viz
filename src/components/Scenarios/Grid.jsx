import React from 'react';
import { Box } from 'rebass';

const Grid = (props) => {
  const { env: environment } = props;
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {environment.states.map((row, idx) => (
        <GridRow key={idx} i={idx} row={row} />
      ))}
    </div>
  );
};

const GridRow = (props) => {
  const { row, i } = props;
  return (
    <div
      style={{
        maxHeight: '10%',
        flexBasis: 'auto',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {row &&
        row.map((blockType, idx) => (
          <GridBlock
            key={idx}
            i={i}
            j={idx / (row.length - 1)}
            rowLength={row.length}
            blockType={blockType}
          />
        ))}
    </div>
  );
};

const GridBlock = (props) => {
  const { blockType, i, j, rowLength } = props;
  return (
    <Box
      style={{
        backgroundColor: blockType,
        borderLeft: '1px solid #D3D3D3',
        borderBottom: '1px solid #D3D3D3',
        borderTop: i === 0 ? '1px solid #D3D3D3' : 'none',
        borderRight: j === 1 ? '1px solid #D3D3D3' : 'none',
        padding: `${1.08}%`,
        maxWidth: '10%',
      }}
    ></Box>
  );
};

export default Grid;
