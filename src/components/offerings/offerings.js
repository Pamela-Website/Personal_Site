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
import CBody from './corporate-body';
import GBody from './group-body';
import NBody from './nutrition-body';

export default class Offerings extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <NBody />
        <hr />
        <CBody />
        <hr />
        <GBody />
      </div>
    );
  }
}
