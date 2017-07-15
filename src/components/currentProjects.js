import React, { Component } from 'react';

export default class CurrentProjects extends Component {

  render() {
    return (
      <div>
        <div className="row project-body-right">
          <div className="col-md-5 col-sm-12">
            <a href="https://organico-plantr.herokuapp.com">
              <img className="project-picture" src="../../public/img/Plantr.png" />
            </a>
          </div>
          <div className="col-md-7 col-sm-12">
            <br />
            <div id="projects" className="project-info">
              <h2 className="project-name">PLANTR</h2>
              <div className="project-description">
                <p>Plantr is an online gardening and outdoor decor service where you can create and plan your seasonal gardens based on regional variations and personal needs.</p>
                <br />
                <b>ROLE: </b>
                <i>Scrum Master</i>
              </div>
            </div>
          </div>
        </div>
        <div className="row project-body-left">
          <div className="col-md-7  col-sm-12">
            <br />
            <h2 className="project-name">STACKETS</h2>
            <div className="project-description">
              <p>Plantr is an online gardening and outdoor decor service where you can create and plan your seasonal gardens based on regional variations and personal needs.</p>
              <br />
              <b>ROLE: </b>
              <i>Product Owner</i>
            </div>
          </div>
          <div className="col-md-5 col-sm-12">
            <a href="https://stackets-orion.herokuapp.com">
              <img className="project-picture-right" src="../../public/img/Stackets.png" />
            </a>
          </div>
        </div>
        <div className="row project-body-right">
          <div className="col-md-5 col-sm-12">
            <a href="https://organico-plantr.herokuapp.com">
              <img className="project-picture" src="../../public/img/Plantr.png" />
            </a>
          </div>
          <div className="col-md-7 col-sm-12">
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
