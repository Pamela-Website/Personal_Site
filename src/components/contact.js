import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Navigation from './navbar';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: '',
      open: false,
    }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.renderSuccessMessage = this.renderSuccessMessage.bind(this);
  }

  handleOpen() {
     this.setState({open: true});
   };

   handleClose() {
     this.setState({open: false, success: ''});
   };

  checkInputs(event) {
    event.preventDefault();
    let hear = this.refs.hear.value;
    let name = this.refs.name.value;
    let email = this.refs.email.value;
    let message = this.refs.message.value;
    if (!name.length || !email.length || !message.length || !hear.length) {
      this.setState({ success: false });
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
          <Dialog
            title="Email Sent Successfully!"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            Thanks so much for reaching out. You'll be receiving a confirmation email shortly. Please check your email (or spam) for details on how to proceed.

            Nourish Roots XOX
          </Dialog>
        </div>
      )
    } else if (this.state.success === false) {
        return (
          <div>
            <Dialog
              title="Error Submitting"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              Please make sure to fill-in all the input fields.
            </Dialog>
          </div>
        )
    } else {
      return (
          <br />
      )
    }
  }

  render() {
    return (
      <div className="contact">
        <section>
          <header className="contact-picture">
            <Navigation />
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
                    <button type="submit" className="send-message-button" onClick={this.handleOpen}> Send Message </button>
                  </div>
                </div>
                <div className="col-sm-4 offset-sm-1 pamela-photo">
                  {this.renderSuccessMessage()}
                </div>
              </div>
            </div>
          </form>
          <div>
          <br />
          </div>
        </section>
      </div>
    );
  }
}
