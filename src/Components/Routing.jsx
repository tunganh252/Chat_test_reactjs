import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'


import SideBar from "./SideBar";
import Header from "./Header";
import Footer from "./Footer";
import App from "./../App";

export default class Routing extends Component {
  render() {
    return (
        <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sidebar">Side Bar</Link>
            </li>
            <li>
              <Link to="/header">Header</Link>
            </li>
            <li>
              <Link to="/footer">Footer</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/users" component={SideBar} />
            <Route path="/header" component={Header} />
            <Route path="/footer" component={Footer} />
          </Switch>
        </div>
      </Router>
    );
  }
}
