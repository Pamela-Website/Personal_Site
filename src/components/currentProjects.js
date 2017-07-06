import React from 'react';

export default class addTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <button className="btn">
          <span className="glyphicon glyphicon-plus-sign"></span> About Me
        </button>
        <div>
          <h3>ABOUT ME</h3>
          <p>Here is my About Me</p>
          <p>
            <b>Role: </b>
            <i>Scrum Master</i>
          </p>
        </div>
        <button className="btn">
          <span className="glyphicon glyphicon-plus-sign"></span> Projects
        </button>
        <div>
          <h3>PROJECTS</h3>
          <p>Here are my Projects</p>
          <p>
            <b>Role: </b>
            <i>Scrum Master</i>
          </p>
        </div>
        <button className="btn">
          <span className="glyphicon glyphicon-plus-sign"></span> Blog
        </button>
        <div>
          <h3>BLOG</h3>
          <p>Here is my Blog</p>
          <p>
            <b>Role: </b>
            <i>Scrum Master</i>
          </p>
        </div>
      </div>
    );
  }
}
