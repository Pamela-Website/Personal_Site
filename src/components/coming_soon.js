import React, { Component } from 'react';
import Navigation from './navbar';

export default class ComingSoon extends Component {
  render() {
    return (
      <div className="coming-soon-container">
        <div className="coming-soon">
          <Navigation />
          <div>
            <p className="coming-soon-header"> COMING SOON </p>
          </div>
          <div>
            <i className="coming-soon-subheader"> This feature is currently being perfected, please come back soon! </i>
          </div>
        </div>
      </div>
    )
  }
}
