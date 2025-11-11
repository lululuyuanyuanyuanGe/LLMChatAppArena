// src/App.tsx
import React from 'react';
import TitleBar from './components/TitleBar';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <TitleBar />
      <div className="content">
        {/* The rest of your app content will go here */}
      </div>
    </div>
  );
};

export default App;

