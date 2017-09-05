import React, { Component } from 'react';
import Header from './header';
import CBody from './corporate-body';

export default class Corporate extends Component {
  render() {
    return (
      <div>
        <Header />
        <hr />
        <CBody />
        <br />
      </div>
    );
  }
}
