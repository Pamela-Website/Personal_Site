import Contact from './contact.js'
import CurrentProjects from './currentProjects';
import Footer from './footer';
import PageHeader from './pageHeader'
import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        <div>
          <p className="helpful-resources">|| HELPFUL RESOURCES ||</p>
        </div>
        <div className="col-md-12">
          <CurrentProjects />
        </div>
        <br />
      </div>
    )
  }
}

