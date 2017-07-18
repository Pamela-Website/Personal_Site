import React, { Component } from 'react';
import { Alert } from 'reactstrap';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false
    }
  }

  sendEmail (name, email, message) {
    fetch('/send', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message
      })
    })
    .then((res) => res.json())
    .then((res) => {
      this.setState({ success: !this.state.success })
      console.log('here is the response: ', res);
    })
    .catch((err) => {
      this.setState({ success: !this.state.success })
      console.error('here is the error: ', err);
    })
  }

  renderSuccessMessage() {
    // preventDefault();
    console.log('this was called')
    if (this.state.success) {
      return (
        <div>
          <Alert color="success" className="sucess-alert">
            <p>Your email was sent successfully. </p>
          </Alert>
        </div>

      )
    }
  }

  render() {
    let name;
    let email;
    let message;
    return (
      <div id="contact" className="contact">
        <section>
          <header>
            <p className="contact-header">Reach Out</p>
          </header>
          <hr />
          <form className="form-styling">
            <div>
              <div className="row">
                <div className="col-sm-5">
                  <label  className="contact-label" htmlFor="name">Name </label>
                  <input className="contact-container" type="text" name="name" ref={(input) => name = input}/>
                </div>
                <div className="col-sm-5 offset-sm-1">
                  <label  className="contact-label" htmlFor="email">Email</label>
                  <input className="contact-container" type="text" name="email" ref={(input) => email = input}/>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-sm-5">
                  <label className="contact-label" htmlFor="message">Message </label>
                </div>
                <div className="col-sm-12">
                  <textarea className="contact-container col-sm-11" name="message" rows="10" ref={(input) => message = input}></textarea>
                </div>
                <div className="row send-message">
                  <button type="submit" className="send-message-button" onClick={() => {
                    name = name.value;
                    email = email.value;
                    message = message.value;
                    this.sendEmail(name, email, message);
                    name.value = '';
                    email.value = '';
                    message.value = ''
                  }}> Send Message </button>
                </div>
              </div>
              <br />
            </div>
          </form>
          <div>
            {this.renderSuccessMessage()}
          </div>
        </section>
      </div>
    );
  }
}
