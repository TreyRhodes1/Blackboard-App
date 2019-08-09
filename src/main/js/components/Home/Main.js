import React, {Component} from "react";
import "./Main.css"
import {Route, Link} from "react-router-dom";
import "../Authentication/SendAuth"
import SendToDropbox from "../Authentication/SendAuth";

function Welcome() {
  return (
    <main className="Body">
      <p>
        Welcome!
      </p>
      <SendToDropbox/>
    </main>
  );
}

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

function Main() {
  return (
    <div>
      <Link to="/">
        <header className="Header">
          Blackboard Sucks
        </header>
      </Link>
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

      <Route exact path="/" component={Welcome}/>
      <Route path="/classes/" component={Classes}/>
      <Route path="/assignments/" component={Assignments}/>
      <Route path="/announcements/" component={Announcements}/>
      <footer className="Footer">
        Built by: Trey Rhodes
      </footer>
    </div>
  );
}

function Login() {
  process.env.CLIENT_ID = "trey";
}

export default Main;