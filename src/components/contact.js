import { Alert } from 'reactstrap';
import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: '',
      open: false,
    }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
     this.setState({open: true});
   };

   handleClose() {
     this.setState({open: false});
   };

  checkInputs(event) {
    console.log('here is the event: ', this.refs)
    event.preventDefault();
    let hear = this.refs.hear.value;
    let name = this.refs.name.value;
    let email = this.refs.email.value;
    let message = this.refs.message.value;
    if (!name.length || !email.length || !message.length || !hear.length) {
      this.setState({ success: false })
    } else {
      this.sendEmail(name, email, message, hear);
      this.refs.name.value = '';
      this.refs.email.value = '';
      this.refs.message.value = '';
      this.refs.hear.value = ''
    }
  }

  sendEmail(name, email, message, hear) {
    fetch('/send', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
        hear: hear,
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
    const actions = [
      <FlatButton
        label="OK"
        primary={true}
        onClick={this.handleClose}
      />,
    ]
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
          <header className="pamela-header">
            <p className="contact-header">Let's Connect</p>
          </header>
          <hr />
          <form onSubmit={this.checkInputs.bind(this)} className="form-styling">
            <div>
              <div className="row">
                <div className="col-sm-7">
                  <div className="row">
                    <label  className="contact-label" htmlFor="name">Name </label>
                    <input className="contact-container" type="text" name="name" ref="name" />
                  </div>
                  <br />
                  <div className="row">
                    <label  className="contact-label" htmlFor="email">Email</label>
                    <input className="contact-container" type="text" name="email" ref="email" />
                  </div>
                  <br />
                  <div className="row">
                    <label className="contact-label" htmlFor="hear">How Did You Hear About Me? </label>
                    <textarea className="contact-container" name="hear" rows="2" ref="hear" ></textarea>
                  </div>
                  <br />
                  <div className="row">
                    <label className="contact-label" htmlFor="message">Message </label>
                    <textarea className="contact-container" name="message" rows="5" ref="message" ></textarea>
                  </div>
                  <br />
                  <div className="row send-message">
                    <button type="submit" className="send-message-button"> Send Message </button>
                  </div>
                </div>
                <div className="col-sm-4 offset-sm-1 pamela-photo">

                </div>
              </div>
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
