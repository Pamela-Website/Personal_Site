import React, { Component } from 'react';
import Header from './header';
import NBody from './nutrition-body';

export default class Nutrition extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <hr />
        <NBody />
       <br />
      </div>
    );
  }
}
