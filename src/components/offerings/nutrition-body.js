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

export default class NBody extends Component {
  constructor(props) {
    super(props);
    this.state ={
      stepIndex: 0,
    }
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  handleNext() {
    let {stepIndex} = this.state;
    if (stepIndex < 4) {
      stepIndex += 1;
      this.setState({ stepIndex });
    }
  };

  handlePrev() {
    let {stepIndex} = this.state;
    if (stepIndex > 0) {
      stepIndex -= 1;
      this.setState({ stepIndex });
    }
  };

  renderStepActions(step) {
    return (
      <div style={{margin: '12px 0'}}>
        {step > 0 && (
          <FlatButton
            label="Back"
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
        <RaisedButton
          label="Next"
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          style={{marginRight: 12}}
        />
      </div>
    );
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
              Complementary Nutritional Introductory Consultation (20-minutes)
            </p>
          </StepButton>
          <StepContent>
            <p className="offering-description">
              This complimentary 20-minute phone consultation will allow me to understand your story, your health and your goals, and establish how we can work together to ensure your success. Please contact me to schedule your complimentary phone consultation.
            </p>
            {this.renderStepActions(0)}
          </StepContent>
        </Step>
        <Step>
          <StepButton
            onClick={() => this.setState({stepIndex: 1})}
            icon={'+'}
          >
            <p className="offering-price">
              One-on-One Nutritional Counseling (90-minutes)
           </p>
          </StepButton>
          <StepContent>
            <div>
              <p className="offering-description">
                Interested in reclaiming your health? I’m here for you. During your session, we’ll explore how your physical, mental and emotional states are impacting your health and we’ll discuss practical tools for transformation. Together, we will create a personalized nutrition and lifestyle plan designed to meet your unique health goals.
              </p>
              <p className="offering-title">
                One-on-One Initial Nutritional Counseling (90-minutes)
              </p>
              <p className="offering-description">
                This in-depth session is an opportunity for me to develop a detailed understanding of your story, your health and your goals while discussing practical tools for transformation. Working together we will create a customized nutrition and lifestyle plan tailored to you and your nutritional needs, including full symptomatic support, recipes, meal plans, supplemental and herbal protocols along with guidance. Please contact me to schedule your appointment.
              </p>
              <p className="offering-title">
                One-on-One Nutritional Counseling Follow-Up Appointment (60-minutes)
              </p>
              <p className="offering-title">
                <em>*For current clients only*</em>
              </p>
              <p className="offering-description">
                Follow-up appointments provide the opportunity to monitor your progress, re-evaluate your existing health goals and adjust your personalized plan as needed. Let’s continue to nourish your mind, body and soul. Please contact me to schedule your follow up.
              </p>
            </div>
            {this.renderStepActions(1)}
          </StepContent>
        </Step>
        <Step>
          <StepButton
            onClick={() => this.setState({stepIndex: 2})}
            icon={'+'}
          >
            <p className="offering-price">
              Virtual Nutritional Counseling (60-minutes)
            </p>
          </StepButton>
          <StepContent>
            <p className="offering-description">
              Outside of LA or prefer to meet remotely? No problem. We can connect via videoconferencing or telephone. Regardless of where you’re based I’d love to work with you. Please contact me to schedule your virtual session.
            </p>
            {this.renderStepActions(2)}
          </StepContent>
        </Step>
        <Step>
          <StepButton
            onClick={() => this.setState({stepIndex: 3})}
            icon={'+'}
          >
            <p className="offering-price">
              Wellness Packages
            </p>
          </StepButton>
          <StepContent>
            <p className="offering-title">
              <i>
                “Do something today that your future self will thank you for”
              </i>
            </p>
            <p className="offering-description">
              Small changes in your everyday life will lead to huge results! Feel your best self yet by prioritizing your health and committing to your goals. To show my full commitment to you and your health, I’m offering a 10% discount when you sign up for a nutritional counseling & wellness package. Please contact me to secure your package.
            </p>
            <p className="offering-title">
              1-MONTH Nutritional Counseling & Wellness DISCOVERY Package
            </p>
            <p className="offering-description">
              This package incorporates four nutritional consultations (60-minutes each) of one-on-one conversations, along with email support between sessions.
            </p>
            <p className="offering-description">
              We meet weekly for one month.
            </p>
            <p className="offering-title">
              3-MONTH Nutritional Counseling & Wellness RESTORATION Package
            </p>
            <p className="offering-description">
              This package incorporates eight nutritional consultations (60-minutes each) of one-on-one conversations, along with email support between sessions.
            </p>
            <p className="offering-description">
              We meet weekly for the first month and then biweekly for the remaining two months.
            </p>
            <p className="offering-title">
              6-MONTH Nutritional Counseling & Wellness FLOURISH Package
            </p>
            <i>Sometimes it’s not as simple as making basic dietary changes
            </i>
            <p className="offering-description">
              This package incorporates 18 nutritional consultations (60-minutes each) of one-on-one conversations, along with unlimited email support between sessions.
            </p>
            <p className="offering-description">
              We meet weekly for the first three months and then fortnightly for the for the remaining three months.
            </p>
            {this.renderStepActions(3)}
          </StepContent>
        </Step>
        <Step>
          <StepButton
            onClick={() => this.setState({stepIndex: 4})}
            icon={'+'}
          >
            <p className="offering-price">
              In-Home Services
            </p>
          </StepButton>
          <StepContent>
            <p className="offering-title">
              In-Home Nutritional Counseling
            </p>
            <p className="offering-description">
              Your health and wellbeing is my top priority. To lighten your load and make life easier for you, I offer in-home visits (dependent on location and subject to mileage costs). Home visits can be an excellent way for me to better understand your home lifestyle, which can aid in the creation of a nutrition plan that is uniquely you. At the heart of your home visit is your personalized nutritional counseling with the additional options of a pantry makeover and/or an in-home cooking demonstration. Please contact me to schedule your in-home session.
            </p>
            <p className="offering-title">
              Pantry Makeover
            </p>
            <p className="offering-description">
              How confusing is it trying to work out what we should be eating and who we should be listening to?  This pantry makeover is all about your health needs and what works best for you. A pantry makeover can be an excellent way to learn a few tricks of the trade when it comes to reading nutrition labels and better understanding marketing packaging ploys. This can be an effective way to reach your goals at a faster pace. We’ll start with your pantry and finish at the market where together we’ll select the right ingredients for you. You’ll be sure to enjoy more bang for your buck when it comes to nourishing yourself and your loves ones. Please contact me to schedule your pantry makeover.
            </p>
            <p className="offering-title">
              In-Home Cooking Demonstration
            </p>
            <p className="offering-description">
              I understand the challenges of finding the time to cook. That’s why I want to empower you to enjoy healthy eating without the inconvenience. Whether you have a family to take care of, you’re a busy professional, or you’re looking to sharpen your healthy living kitchen skills, I’m here for you. I personalize each session to meet your individual health goals and together we’ll get cooking in the kitchen creating a variety of simple yet delicious nutrient dense meals that you can prepare any night of the week. Please contact me to schedule your in-home cooking demo.
            </p>
            {this.renderStepActions(4)}
          </StepContent>
        </Step>
      </Stepper>
      </div>
    );
  }
}
