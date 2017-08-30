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
                Combat stress, boost energy and improve the productivity of your employees. Not bad for a day’s work! Interested in bringing a boost of health to your office while boosting your business’s bottom line? I’m here for you and ready to bring wellness into your workplace (Or optimize the wellbeing of your workforce). Through investing in the wellbeing of your workforce, you can positively impact your employees’ health and job satisfaction, resulting in their increased productivity and loyalty along with a generous boost to your business’s bottom line.
              </p>
              <p className="offering-description">
                Through investing in the wellbeing of your workforce, you can improve your business’s bottom line while positively impacting your employees’ health and job satisfaction. As mentioned in Forbes, with workplace wellness programs in the U.S. equating to $250 million in health cost savings and a 50% reduction in high blood pressure among employees, there’s never been a better time to invest in the health and wellbeing of your employees. As an experienced (licensed) nutritionist, I will work with your HR team to offer a personalized corporate wellness program that includes nutrition workshops, one-on-one nutrition consultations and cooking classes for your employees. Please contact me to discuss your business’s needs. I’m looking forward to inspiring health in your employees (or: bringing wellness into your workplace. )
              </p>
            </StepContent>
          </Step>
        </Stepper>
      </div>
    );
  }
}
