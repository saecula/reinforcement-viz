import React from 'react';
import { Global, css } from '@emotion/core';
import normalize from 'normalize.css';
import './App.css';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Global
        styles={css`
          ${normalize}
          body {
            background-color: #fafafa;
          }
        `}
      />
      <Main />
    </div>
  );
}

export default App;
