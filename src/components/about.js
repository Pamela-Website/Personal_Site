import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className="container about-container">
        <div className="about-info">
          <div className="row">
            <p className="about-header"> PAMELA SANDLER </p>
          </div>
          <div className="row">
            <div className="col-sm-4 line-decoration"></div>
            <div className="col-sm-4"><p className="about-divide">ABOUT</p></div>
            <div className="col-sm-4 line-decoration"></div>
          </div>
          <div className="row">
            <p className="about-description">Ariel is a full-stack engineer with a strong background in JavaScript (ES6) that is passionate about design, development and building innovative products and systems that empower individuals and companies to succeed. He loves working autonomously and in groups to take on challenges and solve problems that require cutting-edge technology and creativity.</p>
          </div>
        </div>
      </div>
    )
  }
}

