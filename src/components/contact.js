import React from 'react';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <section>
          <header className="reach_out">
            <h2>Reach Out</h2>
          </header>
          <form className="form_styling" action="submit" method="post">
            <div className="container">
              <div className="row">
                <div className="col-sm-5 offset-sm-1">
                  <label for="name">Name </label>
                  <input className="contact_container" type="text" name="name" id="name" />
                </div>
                <div className="col-sm-5 offset-sm-1">
                  <label for="email">Email</label>
                  <input className="contact_container" type="text" name="email" id="email" />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="field">
                  <label for="comments">Message </label>
                  <textarea className="contact_container" name="comments" id="comments" rows="10" cols="50"></textarea>
                </div>
                <ul className="actions">
                  <li><input type="submit" value="Send Message" className="special" /></li>
                </ul>
              </div>
            </div>
          </form>
        </section>
      </div>
    );
  }
}
