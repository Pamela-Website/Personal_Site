import React, { Component } from 'react';
import Header from './header';
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

export default class CBody extends Component {
  constructor(props) {
    super(props);
    this.state ={
      stepIndex: 0,
    }
  }

  render() {
    const {stepIndex} = this.state;
    return (
      <div className="container">
        <Stepper
          activeStep={stepIndex}
          linear={false}
          orientation="vertical"
        >
          <Step>
            <StepButton
             onClick={() => this.setState({stepIndex: 0})}
             icon={'+'}
           >
              <p className="offering-price">
                Corporate Wellness Programs
              </p>
            </StepButton>
            <StepContent>
              <p className="offering-description">
                Interested in bringing a health boost to your office while furthering your business’s bottom line? I’m here for you! By investing in the wellbeing of your workforce, you can positively impact your employees’ health and job satisfaction, resulting in increased productivity and loyalty along with a generous boost to your business’s bottom line.
              </p>
              <p className="offering-description">
                <a target="_blank" className="forbes-link" href="https://www.forbes.com/sites/kevinharrington/2015/05/13/corporate-wellness-health-wellness-and-an-improved-bottom-line/#f7e1390e82bb">According to Forbes</a>, workplace wellness programs in the U.S. equate to $250 million in healthcare cost savings and a 50% reduction in high blood pressure among employees. There’s never been a better time to invest in the health and wellbeing of your employees! As an experienced nutritionist, I will work with your team to offer a personalized corporate wellness program that includes nutrition workshops, one-on-one nutrition consultations and cooking classes for your employees. Please contact me to discuss your business’s needs.
              </p>
            </StepContent>
          </Step>
        </Stepper>
      </div>
    );
  }
}
