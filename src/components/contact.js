import React, { Component } from 'react';
import { Alert } from 'reactstrap';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: ''
    }
  }

  checkInputs(event) {
    event.preventDefault();
    let name = this.refs.name.value;
    let email = this.refs.email.value;
    let message = this.refs.message.value;
    if (!name.length || !email.length || !message.length) {
      this.setState({ success: false })
    } else {
      this.sendEmail(name, email, message);
      this.refs.name.value = '';
      this.refs.email.value = '';
      this.refs.message.value = '';
    }
  }

  sendEmail(name, email, message) {
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
      this.setState({ success: true })
    })
    .catch((err) => {
      this.setState({ success: false })
      console.error('here is the error: ', err);
    })
  }

  renderSuccessMessage() {
    if (this.state.success === true) {
      return (
        <div>
          <Alert color="success" className="sucess-alert">
            <p>Your email was sent successfully. </p>
          </Alert>
        </div>
      )
    } else if (this.state.success === false) {
        return (
          <div>
            <Alert color="danger" className="sucess-alert">
              <p>Please make sure to fill-in all the input fields. </p>
            </Alert>
          </div>
        )
    } else {
      return (
          <br />
      )
    }
  }

  componentDidUpdate() {
    if (this.state.success === false || this.state.success === true) {
      const context = this;
      setTimeout(() => context.setState({ success: '' }), 7000)
    }
  }

  render() {
    return (
      <div id="contact" className="contact">
        <section>
          <header>
            <p className="contact-header">Reach Out</p>
          </header>
          <hr />
          <form onSubmit={this.checkInputs.bind(this)} className="form-styling">
            <div>
              <div className="row">
                <div className="col-sm-5">
                  <label  className="contact-label" htmlFor="name">Name </label>
                  <input className="contact-container" type="text" name="name" ref="name" />
                </div>
                <div className="col-sm-5 offset-sm-1">
                  <label  className="contact-label" htmlFor="email">Email</label>
                  <input className="contact-container" type="text" name="email" ref="email" />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-sm-5">
                  <label className="contact-label" htmlFor="message">Message </label>
                </div>
                <div className="col-sm-12">
                  <textarea className="contact-container col-sm-11" name="message" rows="10" ref="message" ></textarea>
                </div>
                <div className="row send-message">
                  <button type="submit" className="send-message-button"> Send Message </button>
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
