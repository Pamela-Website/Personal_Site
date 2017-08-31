import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-icons">
          <a target="_blank" className="a-icons" href="contact">
            <i className="fa fa-envelope" aria-hidden="true"/>
          </a>
          <a target="_blank" className="a-icons" href="https://github.com/Asalem1">
            <i className="fa fa-facebook-official" aria-hidden="true"/>
          </a>
          <a target="_blank" className="a-icons" href="https://www.instagram.com/NourishRootsLA/">
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

