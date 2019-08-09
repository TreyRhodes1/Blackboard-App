import React from 'react';
import "./App.css"
import Main from "./components/Home/Main";
import {HashRouter} from "react-router-dom";

function App() {
  return (
    <div>
      <HashRouter basename="/">
        <Main/>
      </HashRouter>
    </div>
  )
}

export default App;
