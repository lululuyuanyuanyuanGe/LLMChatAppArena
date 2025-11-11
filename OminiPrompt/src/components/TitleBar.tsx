// src/components/TitleBar.tsx
import React from 'react';
import './TitleBar.css';

const TitleBar: React.FC = () => {
  const handleMinimize = () => {
    window.electron.minimizeWindow();
  };

  const handleMaximize = () => {
    window.electron.maximizeWindow();
  };

  const handleClose = () => {
    window.electron.closeWindow();
  };

  return (
    <div className="title-bar">
      <div className="title">OmniPrompt</div>
      <div className="window-controls">
        <button onClick={handleMinimize}>-</button>
        <button onClick={handleMaximize}>+</button>
        <button onClick={handleClose}>x</button>
      </div>
    </div>
  );
};

export default TitleBar;
