import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Blackboard Sucks
      </header>
      <body className="Breadcrumb-bar">
        <button className="Breadcrumb-button">
          Classes
        </button>
        <button className="Breadcrumb-button">
          Assignments
        </button>
        <button className="Breadcrumb-button">
          Announcements
        </button>
      </body>
      <body className="App-body">
        <p>
          display info
        </p>
      </body>

    </div>
  );
}

export default App;
