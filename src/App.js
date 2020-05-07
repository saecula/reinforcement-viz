import React from 'react';
import { Global, css } from '@emotion/core';
import normalize from 'normalize.css';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <div className="App" style={{ height: '100vh', boxSizing: 'border-box' }}>
      <Global
        styles={css`
          ${normalize}
          body {
            background-color: #ffffff;
            max-height: 100px;
          }
        `}
      />
      <Main />
    </div>
  );
}

export default App;
