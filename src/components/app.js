import Contact from './contact.js'
import CurrentProjects from './currentProjects';
import Navigation from './navbar';
import PageHeader from './pageHeader'
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
    <div id="app container" >
      <Navigation />
      <PageHeader />
      <div className="col-md-12">
        <CurrentProjects />
      </div>
      <div>
        <Contact />
      </div>
    </div>
    );
  }
}
