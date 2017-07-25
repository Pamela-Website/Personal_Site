import Contact from './contact.js'
import CurrentProjects from './currentProjects';
import Footer from './footer';
import PageHeader from './pageHeader'
import React, { Component } from 'react';

export default class Home extends Component {
  componentWillMount() {
    document.body.style.backgroundImage = `url('../public/img/aus.jpg')`;
    document.body.style.fontFamily = 'Quicksand';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundSize = 'calc(90vw + 90vh)';
    document.body.style.backgroundPosition = 'center';
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
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

