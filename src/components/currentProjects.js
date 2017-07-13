import React, { Component } from 'react';

export default class addTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <div>
            <a href="https://organico-plantr.herokuapp.com">
              <img className="project-picture" src="../../public/img/Plantr.png" />
            </a>
          </div>
          <div className="col-md-8 project-body-right">
            <br />
            <div className="project-info">
              <h2 className="project-name">PLANTR</h2>
              <div className="project-description">
                <p>Plantr is an online gardening and outdoor decor service where you can create and plan your seasonal gardens based on regional variations and personal needs. </p>
                <br />
                <b>ROLE: </b>
                <i>Scrum Master</i>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 project-body-left">
            <br />
            <h2 className="project-name">STACKETS</h2>
            <div className="project-description">
              <p>Here are my Projects: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <br />
              <b>ROLE: </b>
              <i>Product Owner</i>
            </div>
          </div>
          <div>
            <a href="https://stackets-orion.herokuapp.com">
              <img className="project-picture" src="../../public/img/Stackets.png" />
            </a>
          </div>
        </div>
        <div className="row">
          <div>
            <a href="https://organico-plantr.herokuapp.com">
              <img className="project-picture" src="../../public/img/Plantr.png" />
            </a>
          </div>
          <div className="col-md-8 project-body-right">
            <br />
            <h2 className="project-name">PLANTR</h2>
            <div className="project-description">
              <p>Plantr is an online gardening and outdoor decor service where you can create and plan your seasonal gardens based on regional variations and personal needs. </p>
              <br />
              <b>ROLE: </b>
              <i>Software Engineer</i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
