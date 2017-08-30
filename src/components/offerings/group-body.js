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

export default class GBody extends Component {
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
                Group Wellness Programs
              </p>
            </StepButton>
            <StepContent>
              <p className="offering-description">
                GROUP WELLNESS
              </p>
              <p className="offering-description">
                GROUP WELLNESS
              </p>
            </StepContent>
          </Step>
        </Stepper>
      </div>
    );
  }
}
