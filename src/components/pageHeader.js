import React, { Component } from 'react';

export default class PageHeader extends Component {
  render() {
    return (
      <div className="pageHeader">
        <header>
          <p className="name-header">Hi, I'm Ariel Salem</p>
        </header>
        <hr />
        <div>
          <p className="description-header">FULL STACK DEVELOPER & UI/UX DESIGNER</p>
        </div>
      </div>
    );
  }
}
