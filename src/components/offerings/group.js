import React, { Component } from 'react';
import Header from './header';
import GBody from './group-body';

export default class Group extends Component {
  render() {
    return (
      <div>
        <Header />
        <hr />
        <GBody />
        <br />
      </div>
    );
  }
}
