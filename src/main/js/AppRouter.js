import React from "react";
import {BrowserRouter as Router, Route, Link, HashRouter} from "react-router-dom";

function Classes() {
  return (
    <main className="Body">
      <p>
        Classes here
      </p>
    </main>
  );
}

function Assignments() {
  return (
    <main className="Body">
      <p>
        Assignments here
      </p>
    </main>
  );
}

function Announcements() {
  return (
    <main className="Body">
      <p>
        Announcements here
      </p>
    </main>
  );
}

function AppRouter() {
  return (
    <div>
      <header className="Nav-bar">
        <Link to="/classes" className="Nav-link">
          <div className="Nav-button">
            Classes
          </div>
        </Link>
        <Link to="/assignments" className="Nav-link">
          <div className="Nav-button">
            <span>
              Assignments
            </span>
          </div>
        </Link>
        <Link to="/announcements" className="Nav-link">
          <div className="Nav-button">
            <span>
              Announcements
            </span>
          </div>
        </Link>
      </header>

      <Route path="/classes/" component={Classes}/>
      <Route path="/assignments/" component={Assignments}/>
      <Route path="/announcements/" component={Announcements}/>
    </div>
  );
}

export default AppRouter;