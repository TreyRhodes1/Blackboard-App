import React, { Component } from "react";
import "./Home.css"
import Navbar from "./Navbar";
import {Route, HashRouter} from "react-router-dom";
import CourseList from "../Models/CourseList";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <HashRouter>
          <Route path='/courses' component={CourseList}/>
          {/*<Route path='/assignments' component={Assignments}/>*/}
          {/*<Route path='/announcements' component={Announcements}/>*/}
        </HashRouter>
        <Footer/>
      </div>
    );
  }
}

export default Home;