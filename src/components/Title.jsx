import React from 'react';

const css = {
  padding: '10px',
  alignText: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Helvetica',
  fontSize: '1.7em',
  color: 'white',
  backgroundColor: 'darkgrey',
  marginColor: 'darkgrey',
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '100%',
};

const Title = () => {
  return <div style={css}>Reinforcement Viz</div>;
};

export default Title;
