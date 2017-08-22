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

export default class Corporate extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div>
          <p className="description-header">CORPORATE WELLNESS</p>
        </div>
      </div>
    );
  }
}
