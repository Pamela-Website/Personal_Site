import React, { Component } from 'react';
import Navigation from './navbar';

export default class PageHeader extends Component {
  render() {
    return (
      <div className="pageHeader">
        <div className="home-nav">
          <Navigation />
        </div>
        <header>
          <p className="name-header">Pamela Sandler</p>
        </header>
        <hr />
        <div>
          <p className="description-header">MASTERS OF SCIENCE IN NUTRITION, <a className="nunm" target="_blank" href="http://nunm.edu/" >NUNM</a></p>
        </div>
      </div>
    );
  }
}
