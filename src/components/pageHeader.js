import React, { Component } from 'react';

export default class PageHeader extends Component {
  render() {
    return (
      <div className="pageHeader">
        <header>
          <p className="name-header">Hi, I'm Pamela Sandler</p>
        </header>
        <hr />
        <div>
          <p className="description-header">MASTERS OF SCIENCE IN NUTRITION, <a className="nunm" target="_blank" href="http://nunm.edu/" >NUNM</a> (2017)</p>
        </div>
      </div>
    );
  }
}
