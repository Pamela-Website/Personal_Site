import React, { Component } from 'react';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderFooter = this.renderFooter.bind(this);
  };

  renderFooter() {
    if (window.location.pathname === '/recipes') {
      return <span />;
    }
    return (
      <div className="footer">
        <div className="footer-icons">
          <a target="_blank" className="a-icons" href="contact">
            <i className="fa fa-envelope" aria-hidden="true"/>
          </a>
          <a target="_blank" className="a-icons" href="https://www.facebook.com/nourish.roots.1">
            <i className="fa fa-facebook-official" aria-hidden="true"/>
          </a>
          <a target="_blank" className="a-icons" href="https://www.instagram.com/nourishroots/">
            <i className="fa fa-instagram" aria-hidden="true"/>
          </a>
          <a target="_blank" className="a-icons" href="https://www.pinterest.com/nourishroots/">
            <i className="fa fa-pinterest" aria-hidden="true"/>
          </a>
        </div>
        <br />
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.renderFooter() }
      </div>
    )
  }
}

