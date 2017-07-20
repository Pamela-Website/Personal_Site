import React, { Component } from 'react';

export default class CurrentProjects extends Component {

  render() {
    return (
     <div id="portfolio" className="project-info">
      <div className="row">
        <div className="col-md-3 offset-md-1 project-body-left">
          <div className="row">
            <a href="https://organico-plantr.herokuapp.com">
             <img className="project-picture" src="../../public/img/Plantr.png" />
            </a>
          </div>
          <div className="row">
           <br />
           <div className="project-info">
             <p className="project-name">PLANTR</p>
             <div className="project-description">
               <p>Plantr is an online gardening and outdoor decor service where you can create and plan your seasonal gardens based on regional variations and personal needs.</p>
               <div className="project-role">
                 <b>ROLE: </b>
                 <i>Scrum Master</i>
               </div>
             </div>
           </div>
         </div>
        </div>
        <div className="col-md-3 project-body-right">
          <div className="row"><a href="https://stackets-orion.herokuapp.com">
             <img className="project-picture-right" src="../../public/img/Plantr.png" />
           </a>
         </div>
          <div className="row">
           <br />
           <div className="project-info">
           <p className="project-name">STACKETS</p>
           <div className="project-description">
             <p>Plantr is an online gardening and outdoor decor service where you can create and plan your seasonal gardens based on regional variations and personal needs.</p>
             <div className="project-role">
               <b>ROLE: </b>
               <i>Product Owner</i>
             </div>
           </div>
          </div>
         </div>
        </div>
        <div className="col-md-3 project-body-left">
            <div className="row"><a href="https://organico-plantr.herokuapp.com">
               <img className="project-picture" src="../../public/img/Plantr.png" />
             </a></div>
            <div className="row">
             <br />
             <div className="project-info">
             <p className="project-name">THYMER</p>
             <div className="project-description">
               <p>Plantr is an online gardening and outdoor decor service where you can create and plan your seasonal gardens based on regional variations and personal needs. </p>
               <div className="project-role">
                 <b>ROLE: </b>
                 <i>Software Engineer</i>
               </div>
             </div>
            </div>
           </div>
          </div>
        </div>
      </div>
    );
  }
}
/*      <div>
        <div className="row project-body-right">
          <div className="col-md-4 col-sm-12">
            <a href="https://organico-plantr.herokuapp.com">
              <img className="project-picture" src="../../public/img/Plantr.png" />
            </a>
          </div>
          <div className="col-md-8 col-sm-12">
            <br />
            <div id="portfolio" className="project-info">
              <p className="project-name">PLANTR</p>
              <div className="project-description">
                <p>Plantr is an online gardening and outdoor decor service where you can create and plan your seasonal gardens based on regional variations and personal needs.</p>
                <div className="project-role">
                  <b>ROLE: </b>
                  <i>Scrum Master</i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row project-body-left">
          <div className="col-md-7 col-sm-12">
            <br />
            <p className="project-name">STACKETS</p>
            <div className="project-description">
              <p>Plantr is an online gardening and outdoor decor service where you can create and plan your seasonal gardens based on regional variations and personal needs.</p>
              <div className="project-role">
                <b>ROLE: </b>
                <i>Product Owner</i>
              </div>
            </div>
          </div>
          <div className="col-md-4 offset-md-1 offset-sm-0 col-sm-12">
            <a href="https://stackets-orion.herokuapp.com">
              <img className="project-picture-right" src="../../public/img/Stackets.png" />
            </a>
          </div>
        </div>
        <div className="row project-body-right">
          <div className="col-md-4 col-sm-12">
            <a href="https://organico-plantr.herokuapp.com">
              <img className="project-picture" src="../../public/img/thymer.jpg" />
            </a>
          </div>
          <div className="col-md-8 col-sm-12">
            <br />
            <p className="project-name">THYMER</p>
            <div className="project-description">
              <p>Plantr is an online gardening and outdoor decor service where you can create and plan your seasonal gardens based on regional variations and personal needs. </p>
              <div className="project-role">
                <b>ROLE: </b>
                <i>Software Engineer</i>
              </div>
            </div>
          </div>
        </div>
      </div>
*/
