import Contact from './contact.js'
import CurrentProjects from './currentProjects';
import PageHeader from './pageHeader'
import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <PageHeader />
        <div className="col-md-12">
          <CurrentProjects />
        </div>
        <br />
        <div>
          <Contact />
        </div>
      </div>
    )
  }
}

