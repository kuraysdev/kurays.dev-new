import React from 'react';
import Dashboard from './components/Dashboard';
import AppIcons from './components/AppIcons';
import './styles/global.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <Dashboard />
      <AppIcons />
    </div>
  );
};

export default App;