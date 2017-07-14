import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <section>
          <header>
            <p className="contact-header">Reach Out</p>
          </header>
          <hr />
          <form className="form-styling" action="submit" method="post">
            <div className="container">
              <div className="row">
                <div className="col-sm-5">
                  <label  className="contact-label" for="name">Name </label>
                  <input className="contact-container" type="text" name="name" id="name" />
                </div>
                <div className="col-sm-5 offset-sm-1">
                  <label  className="contact-label" for="email">Email</label>
                  <input className="contact-container" type="text" name="email" id="email" />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-sm-5">
                  <label className="contact-label" for="message">Message </label>
                </div>
                  <div className="col-sm-12">
                    <textarea className="contact-container col-sm-11" name="comments" rows="10"></textarea>
                  </div>
              </div>
              <br />
              <div className="row send-message">
                <button type="submit" className="send-message-button"> Send Message </button>
              </div>
            </div>
          </form>
        </section>
      </div>
    );
  }
}
