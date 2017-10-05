import Coverflow from 'react-coverflow';
import React, { Component } from 'react';

export default class CurrentProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 2
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
          <img src='https://www.mommypotamus.com/wp-content/uploads/2016/01/mthfr-gene-mutation.jpg' alt='MTHFR Gene Mutation' data-action="../../public/docs/MTHFR_GM.pdf"/>
          <img src='https://i.pinimg.com/564x/cd/2b/b1/cd2bb1b74f6e9ade2545579d1133578b.jpg' alt='The Healing Properties of Goji Berries' data-action="../../public/docs/Goji_Berries.pdf"/>
          <img src='https://i.pinimg.com/564x/77/f9/a8/77f9a8517c9c887fa2b5cef308a659c6.jpg' alt='Practicing Mindful Eating' data-action="../../public/docs/Mindful_Eating.pdf"/>
          <img src='https://i.pinimg.com/564x/8b/70/6d/8b706d3f346dc3516ebaebf5ab6c60fc.jpg' alt='Adverse Food Reactions' data-action="../../public/docs/Food_Reactions.pdf"/>
        </Coverflow>
      </div>
    );
  }
}
