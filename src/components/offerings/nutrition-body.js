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
              To better understand your story, your health and your goals (or: to better establish how we can work together to ensure your success), let’s connect and get acquainted. Please contact me to schedule your complimentary phone consultation. I’m looking forward to talking with you.
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
              One-on-One Nutritional Consultation (90-minutes)
           </p>
          </StepButton>
          <StepContent>
            <div>
              <p className="offering-description">
                Interested in reclaiming your health? I’m here for you. During your consultation, we’ll explore how your physical, mental and emotional states are impacting your health and we’ll discuss practical tools for transformation. Working together we will create a personalized, tailor made nutrition and lifestyle plan designed to meet your unique health goals.
              </p>
              <p className="offering-title">
                One-on-One Initial Nutritional Consultation (90-minutes)
              </p>
              <p className="offering-description">
                Each and every one of us has individual requirements that are dependent on the status of our health. The purpose of this session is for me to get to know you better and to get you started on your unique journey to optimal health. This will be an opportunity for me to develop a detailed understanding of your story, your health and your goals while discussing practical tools for transformation. Working together we will create a customized nutrition and lifestyle plan tailored to you and your requirements. This will include full symptomatic support, recipes, meal plans, supplemental and herbal protocols along with guidance that will be tailored to your nutrition needs. Please contact me to schedule your consultation. I’m looking forward to getting started on this journey with you.
              </p>
              <p className="offering-title">
                One-on-One Nutritional Consultation Follow-Up Appointment (60-minutes)
              </p>
              <p className="offering-description">
                This plan is for current clients. Follow up’s provide the opportunity to monitor your progress, re-evaluate your existing health goals and adjust your personalized plan as needed. (OR: Follow up’s provide the opportunity to monitor your progress, re-evaluate your existing health goals and action plan while adjusting your personalized plan as required.) Let’s continue to nourish your mind, body and soul. Please contact me to schedule your follow up. I’m looking forward to continuing this journey with you.
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
              Virtual Nutritional Consultation (60-minutes)
            </p>
          </StepButton>
          <StepContent>
            <p className="offering-description">
              Outside of LA or prefer to meet remotely? No problem. We can connect via videoconferencing or telephone. Regardless of where you’re based I’d love to work with you. If you’re outside of LA or traveling, I offer across state and international consultations via videoconferencing or telephone. Please contact me to schedule your virtual consultation. I’m looking forward to embarking on this journey together.
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
                 OR: “Change is hard at first, messy in the middle and gorgeous at the end” Robin Sharma
              </i>
            </p>
            <p className="offering-description">
              A little progress each day adds up to big results! Feel your best self yet by prioritizing your health and committing to your goals. To show my full commitment to you and your health, I’m offering a 10% discount when you sign up for a nutritional consultation & wellness package/program. Please contact me to secure your package. I’m looking forward to continuing our journey together.
            </p>
            <p className="offering-title">
              1-MONTH Nutritional Consultation & Wellness DISCOVERY Package
            </p>
            <p className="offering-description">
              This package incorporates four nutritional consultations (60-minutes each) of one-on-one conversations, along with email support between sessions.
            </p>
            <p className="offering-description">
              We meet weekly for one month.
            </p>
            <p className="offering-title">
              3-MONTH Nutritional Consultation & Wellness RESTORATION Package
            </p>
            <p className="offering-description">
              This package incorporates eight nutritional consultations (60-minutes each) of one-on-one conversations, along with email support between sessions.
            </p>
            <p className="offering-description">
              We meet weekly for the first month and then fortnightly for the remaining two months.
            </p>
            <p className="offering-title">
              6-MONTH Nutritional Consultation & Wellness FLOURISH Package
            </p>
            <i>Sometimes it’s not as simple as making basic dietary changes (or: sometimes there’s no quick fix)
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
              In-Home Nutritional Consultation
            </p>
            <p className="offering-description">
              Your health and wellbeing is my top priority. To lighten your load and make life easier for you, I offer in-home visits (distance dependent). Home visits can be an excellent way for me to better understand your home lifestyle, which can aid in the creation of a nutrition plan that is uniquely you. At the heart of your home visit is your personalized nutrition consultation with the additional options of a pantry makeover and/or an in-home cooking demonstration. Please contact me to schedule your in-home consultation.
            </p>
            <p className="offering-title">
              Pantry Makeover
            </p>
            <p className="offering-description">
              How confusing is it trying to work out what we should be eating and who we should be listening to?  This pantry makeover is all about your health needs and what works best for you. A pantry makeover can be an excellent way to learn a few tricks of the trade when it comes to reading nutrition labels and better understanding packaging ploys. This can be an effective way to reach your goals at a faster pace. We’ll start with your pantry and finish at the market where together we’ll select the right ingredients for you. You’ll be sure to enjoy more bang for your buck when it comes to nourishing yourself and your loves ones. Please contact me to schedule your pantry makeover.
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
