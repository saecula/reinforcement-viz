import React, { useState } from 'react';
import ScenarioView from './components/ScenarioView';
import Dashboard from './components/Dashboard';
import TopContext from './components/TopContext';

function Main() {
  const [agents, setAgents] = useState([]);
  return (
    <TopContext.Provider value={{ agents, setAgents }}>
      <ScenarioView />
      <Dashboard />
    </TopContext.Provider>
  );
}

export default Main;
