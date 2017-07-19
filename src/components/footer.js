import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <hr />
        <div className="footer-icons">
          <a target="_blank" className="a-icons" href="https://www.linkedin.com/in/ariel-salem/">
            <i className="fa fa-linkedin" aria-hidden="true"/>
          </a>
          <a target="_blank" className="a-icons" href="https://github.com/Asalem1">
            <i className="fa fa-github" aria-hidden="true"/>
          </a>
        </div>
        <br />
        <div className="footer-copyright">© Ariel Salem </div>
        <br />
        <br />
      </div>
    )
  }
}

