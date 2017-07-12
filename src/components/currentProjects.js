import React from 'react';

export default class addTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div>
            <a href="https://organico-plantr.herokuapp.com">
              <img className="project-picture" src="../../public/img/Plantr.png" />
            </a>
          </div>
          <div className="col-md-8">
            <h3>ABOUT ME</h3>
            <p>Here is my About Me: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>
            <p>
              <b>Role: </b>
              <i>Scrum Master</i>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <h3>PROJECTS</h3>
            <p>Here are my Projects: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>
              <b>Role: </b>
              <i>Scrum Master</i>
            </p>
          </div>
          <div>
            <a href="https://stackets-orion.herokuapp.com">
              <img className="project-picture" src="../../public/img/Stackets.png" />
            </a>
          </div>
        </div>
        <div className="row">
          <button className="btn">
            <span className="glyphicon glyphicon-plus-sign"></span> Blog
          </button>
          <div>
            <h3>BLOG</h3>
            <p>Here is my Blog: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>
              <b>Role: </b>
              <i>Scrum Master</i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
