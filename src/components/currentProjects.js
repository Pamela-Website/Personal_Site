import Coverflow from 'react-coverflow';
import React, { Component } from 'react';
// import Link from 'react-toolbox/lib/link';
// import Tooltip from 'react-toolbox/lib/tooltip';

// const TooltipLink = Tooltip(Link);
//

export default class CurrentProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0
    };
  }

  render() {
    return (
     <div id="resources" className="project-info">
       <Coverflow
          width={960}
          height={720}
          displayQuantityOfSide={1}
          enableHeading={true}
          active={this.state.active}
          >
          <img src='http://www.goldenpoppyherbs.com/media/wysiwyg/Dong_Quai_botanical_Drawing.png' alt='Dong Quai Healing Properties' data-action='../../public/docs/DQ.pdf'  />
          <img src='https://static.pexels.com/photos/4988/beach-palms.jpg' alt='Album two' data-action="http://passer.cc"/>
          <img src='https://static.pexels.com/photos/4988/beach-palms.jpg' alt='Album three' data-action="https://doce.cc/"/>
          <img src='https://static.pexels.com/photos/4988/beach-palms.jpg' alt='Album four' data-action="http://tw.yahoo.com"/>
          <img src='https://static.pexels.com/photos/4988/beach-palms.jpg' alt='Album one' data-action="https://facebook.github.io/react/"/>
          <img src='https://static.pexels.com/photos/4988/beach-palms.jpg' alt='Album two' data-action="http://passer.cc"/>
          <img src='https://static.pexels.com/photos/4988/beach-palms.jpg' alt='Album three' data-action="https://doce.cc/"/>
          <img src='https://static.pexels.com/photos/4988/beach-palms.jpg' alt='Album four' data-action="http://tw.yahoo.com"/>
        </Coverflow>
      </div>
    );
  }
}

/* <div className="row">
        <div className="col-lg-3 offset-md-1 col-sm-11 project-body">
          <div className="row">
            <TooltipLink target="_blank"  href="https://organico-plantr.herokuapp.com" tooltip='Click to Navigate to Plantr'>
             <img className="project-picture" src="../../public/img/Plantr.jpg" />
            </TooltipLink>
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
        <div className="col-lg-3 col-sm-11 project-body">
          <div className="row">
          <TooltipLink target="_blank"  href="https://stackets-orion.herokuapp.com" tooltip='Click to Navigate to Stackets'>
             <img className="project-picture" src="../../public/img/Stackets.jpg" />
           </TooltipLink>
         </div>
          <div className="row">
           <br />
           <div className="project-info">
           <p className="project-name">STACKETS</p>
           <div className="project-description">
             <p>Stackets is a personalized programming assistant that allows users to work through, solve, and store helpful tips and tricks for becoming a computer programming.</p>
             <div className="project-role">
               <b>ROLE: </b>
               <i>Product Owner</i>
             </div>
           </div>
          </div>
         </div>
        </div>
        <div className="col-lg-3 col-sm-11 project-body">
          <div className="row">
            <TooltipLink target="_blank"  href="http://orion-thyme.herokuapp.com/#/" tooltip='Click to Navigate to Thymer'>
              <img className="project-picture" src="../../public/img/Thymer.jpg" />
            </TooltipLink>
          </div>
          <div className="row">
             <br />
             <div className="project-info">
             <p className="project-name">THYMER</p>
             <div className="project-description">
               <p>Thymer is the personal Sous Chef you never knew you needed. From automated timers that keep you on track, to vocalized recipes, this app makes cooking fun and easy. </p>
               <div className="project-role">
                 <b>ROLE: </b>
                 <i>Software Engineer</i>
               </div>
             </div>
            </div>
           </div>
          </div>
        </div>*/

// ALTERNATIVE LOOK
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
