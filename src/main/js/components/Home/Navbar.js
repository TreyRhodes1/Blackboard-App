import React, {Component} from 'react';
import {HashRouter, Link} from 'react-router-dom';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <HashRouter>
          <Link to="/">
            <header className="Header">
              Blackboard Sucks
            </header>
          </Link>
          <header className="Nav-bar">
            <Link to="/courses" className="Nav-link">
              <div className="Nav-button">
                Courses
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
        </HashRouter>
      </div>
    );
  }
}