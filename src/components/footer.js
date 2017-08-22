import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-icons">
          <a target="_blank" className="a-icons" href="https://www.linkedin.com/in/ariel-salem/">
            <i className="fa fa-linkedin" aria-hidden="true"/>
          </a>
          <a target="_blank" className="a-icons" href="https://github.com/Asalem1">
            <i className="fa fa-facebook" aria-hidden="true"/>
          </a>
          <a target="_blank" className="a-icons" href="https://github.com/Asalem1">
            <i className="fa fa-instagram" aria-hidden="true"/>
          </a>
          <a target="_blank" className="a-icons" href="https://github.com/Asalem1">
            <i className="fa fa-pinterest" aria-hidden="true"/>
          </a>
        </div>
        <br />
      </div>
    )
  }
}

