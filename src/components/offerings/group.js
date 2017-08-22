import React, { Component } from 'react';
import Header from './header';

export default class Group extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div>
          <p className="description-header">GROUP WELLNESS</p>
        </div>
      </div>
    );
  }
}
