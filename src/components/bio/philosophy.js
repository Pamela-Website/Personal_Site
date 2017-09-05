import React, { Component } from 'react';
import Navigation from '../navbar';

export default class Philosophy extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-info">
          <div className="about-picture">
            <Navigation />
            <div>
              <p className="about-header"> MY HEALTH PHILOSOPHY </p>
            </div>
          </div>
          <hr />
          <div className="container">
            <br />
            <div className="row">
              <div className="row">
                <i className="about-quote">
                  "A healthy outside starts from the inside" –Robert Urich
                </i>
              </div>
              <div className="row about-me">
                When it comes to health, there’s no one size fits all. That’s why my whole foods nutrition practice is based upon a personalized, tailor-made approach to health and wellbeing. Step by step, we will work together to create effective strategies that will meet and maintain your nutrition goals to set you up for success. (OR: Step by step, we will work together to identify your unique goals and to create effective strategies to set you up for success.)
              </div>
              <br />
              <div className="row about-me">
                As humans, we are designed to be in a state of balance. All too often, we can become disconnected from ourselves and our food, leaving us in a state of imbalance. My functional healthcare approach looks at you as a whole person and how each area of your life influences and impacts upon your health. In order to rebalance you, we will follow a mind-body approach that will facilitate your natural healing processes and utilize the transformational powers of food as medicine.
                </div>
              </div>
              <br />
              <div className="row">
                <div className="row">
                  <i className="about-quote">"Self-Care is an Act of Self-Love"</i>
                </div>
                <br />
                <div className="row about-me">
                   My practice is geared towards women’s health. As women, we are often silenced in society however I want to readdress the imbalance within the genders and provide you with a voice and a platform to be heard. Despite the underrepresentation of women in research and health, I want you to know that I see each and every one of you, I hear you all loud and clear and I will always do my very best to help you to feel your best EVERY SINGLE DAY.
                </div>
              </div>
              <br />
              <div className="row">
                <div className="row">
                  <i className="about-quote">
                    "Every Woman who heals herself helps heal all the women who came before her and all those who come after her." –Christiane Northrup
                  </i>
                </div>
              <br />
              <div className="row about-me">
                 My goal is to use my personal journey, education and professional experience (OR: knowledge and expertise) to help you tune into your inner bodily wisdom, enabling you to create positive changes that have long-lasting and transformational effects. As a team, we will design attainable, fulfilling and rewarding personalized nutrition plans that are rooted in health and wellbeing. Through adapting a lifestyle embedded in healthy habits and whole foods, you will develop a deeper understanding of yourself and learn how to nourish your body so that you can truly flourish. Together we will find the right solutions for you to achieve optimum health and become the healthiest version of yourself.
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
