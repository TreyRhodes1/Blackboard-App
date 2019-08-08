import React from 'react';
import "./App.css"
import AppRouter from "./AppRouter";
import {HashRouter} from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <header className="Header">
          Blackboard Sucks
        </header>
        <AppRouter/>
        <footer className="Footer">
          Built by: Trey Rhodes
        </footer>
      </HashRouter>
    </div>
  )
}

export default App;
