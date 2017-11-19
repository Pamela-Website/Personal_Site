import React, { Component } from 'react';
import Navigation from '../navbar';

export default class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-info">
          <div className="bio-picture">
            <Navigation />
            <div>
              <p className="about-header"> ABOUT PAMELA </p>
            </div>
            <div>
              <i className="about-subheader">Pamela's Story and How it All Began ... </i>
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="row">
              <div className="col-sm-8">
                <div className="row">
                  <div className="row">
                    <i className="about-quote">"There is no sincerer love than the love of food." –George Bernard Shaw</i>
                  </div>
                  <br />
                  <div className="row about-me">
                    I’ve always been very passionate about food and helping. However, my relationship with food wasn’t always as straightforward as it may seem. I grew up across the pond in Manchester, England and although I wasn’t a stranger to fruits and vegetables in my childhood, my diet was far from wholesome. In fact, I was heavily disconnected from the foods I ate. It wasn’t until my mid-20s, after years of struggling with gastrointestinal issues and what I now understand to be hormonal imbalance, that I decided it was time to take charge of my body and begin to rebuild our broken relationship. For the first time in my life I began to converse with my body, listening to what she was telling me through the symptoms she presented, and responding to her as she needed. I turned to nutrition to establish this symbiotic relationship and began to discover that whole foods combined with self-care paved the way for a complete me. I was fortunate enough to be able to transform my own health through the healing powers of whole foods and modifications to my lifestyle. Inspired by my own experiences, I realized that I wanted to be of service to others, helping to optimize their health and create internal harmony by providing nourishment for the mind, body, and soul.

                  </div>
                </div>
                <div className="row">
                  <div className="row">
                    <i className="about-quote">"Food is not just fuel. Food is about family, food is about community, food is about identity. And we nourish all those things when we eat well." –Michael Pollan </i>
                  </div>
                  <br />
                  <div className="row about-me">
                     Having lived around the globe in England, Israel, Australia and the U.S., it is clear to me that for each and every one of us, nutrition and lifestyle plays a fundamental role in our health and wellness. As in the case of a tree, wherever it is situated, its roots must be nurtured and nourished in order for its stem and branches to flourish, yielding true health. Our foundation mirrors the roots of a tree, as we too must tackle the cause of our ailments in order to achieve true health. I learned that it is only by looking at a person as a whole, that we can fully address the root causes of imbalance, facilitate the body’s natural healing mechanisms (through diet and lifestyle) and in turn create positive changes that have lasting effects.
                  </div>
                  <br />
                  <div className="row about-me">
                     After earning my Master’s of Science in Nutrition at the National University of Natural Medicine in Portland, Oregon, I moved to Los Angeles (LA), California where I opened up my own practice focused on women’s health and wellbeing to help those seeking nutritional support and looking to improve their health. Recognizing that women are often underrepresented in many areas of our society (particularly with healthcare and research), I decided to pursue my passion of utilizing nutrition and lifestyle to help motivate, educate and empower my clients.
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="row about-me">
                    Now settled in LA with my wonderful husband Ariel, I feel blessed that I have found a path that has provided me with the opportunity to help others become the best version of themselves. Healthy living is something that we all deserve and by working together we can pave the way to a healthier, more nourished you.
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="row about-me">
                    Thank you for embarking on this healthy living journey with me.
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="row about-me">
                    In health, in happiness and in nourishment,
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="row about-me">
                    Pamela xox
                  </div>
                </div>
              </div>
              <br />
              <div className="col-sm-3 offset-sm-1 about-credentials">
                <p className="about-credentials-title">Credentials: </p>
                <div className="row">
                  <p className="about-credentials-text">
                    Clinical Internship Focused on Women’s & Child Health – 2017
                    <p className="about-institution">
                      Magnolia Family Clinic, Portland, Oregon
                    </p>
                  </p>
                </div>
                <div className="row">
                  <p className="about-credentials-text">
                    Master’s of Science in Nutrition – 2017
                    <p className="about-institution">
                      National University of Natural Medicine (NUNM), Oregon
                    </p>
                  </p>
                </div>
                <div className="row">
                  <p className="about-credentials-text">
                    Bachelor’s of Art in Classical Civilization & Literature – 2007
                    <p className="about-institution">
                      University of Birmingham, England
                    </p>
                  </p>
                </div>
                <div className="row">
                  <p className="about-credentials-text">
                    Nutritional Counseling & Health Coaching
                  </p>
                </div>
                <div className="row">
                  <p className="about-credentials-text">
                    Biochemistry & Pathophysiology
                  </p>
                </div>
                <div className="row">
                  <p className="about-credentials-text">
                    Culinary Skills & Cooking with Medicinal Herbs
                  </p>
                </div>
                <div className="row">
                  <p className="about-credentials-text">
                    Women's Health and Fertility
                  </p>
                </div>
                <div className="row">
                  <p className="about-credentials-text">
                    Detoxification and Cleanses
                  </p>
                </div>
                <div className="row">
                  <p className="about-credentials-text">
                    Food Allergies and Intolerances
                  </p>
                </div>
                <div className="row">
                  <p className="about-credentials-text">
                    Medical Nutritional Therapy
                  </p>
                </div>
                <div className="row">
                  <p className="about-credentials-text">
                    Healing Foods
                  </p>
                </div>
                <div className="row">
                  <p className="about-credentials-text">
                    Herbal Medicine (Cooking with Western & Chinese Herbs)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
