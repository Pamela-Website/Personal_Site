import Blog from './blog';
import Home from './home'
import Navigation from './navbar';
import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <div className="container-fluid">
            <Route exact path="/" component={Home}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/blog" component={Blog}></Route>
          </div>
        </div>
      </Router>
    );
  }
}
