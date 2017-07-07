import React from 'react';

export default class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <section>
          <header>
            <h2>Reach Out</h2>
          </header>
          <form className="form-control" action="submit" method="post">
            <div className="field half first">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label for="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label for="comments">Message</label>
              <textarea name="comments" id="comments" rows="6"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
            </ul>
          </form>
        </section>
      </div>
    );
  }
}
