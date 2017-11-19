import React, { Component } from 'react';
import Header from './header';
import CBody from './corporate-body';
import GBody from './group-body';
import NBody from './nutrition-body';

export default class Offerings extends Component {
  render() {
    return (
      <div>
        <Header />
        <NBody />
        <hr />
        <CBody />
        <br />
      </div>
    );
  }
}

/*      <div>
        <Header />
        <NBody />
        <hr />
        <CBody />
        <hr />
        <GBody />
        <br />
      </div>*/
