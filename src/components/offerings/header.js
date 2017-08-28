import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="pamela-header">
        <header>
          <br />
          <p className="nutrition-intro">
            Working Together
          </p>
          <div className="offering-intro">
            <p className="pamela-quote"><i>
              It’s never too early or too late to work towards becoming the healthiest version of yourself
            </i></p>
            <p className="nutrition-header">I’m looking forward to connecting with you and supporting you on your journey to optimum health. Utilizing my knowledge and expertise, I offer a variety of services that are designed to help you adopt a lifestyle embedded in healthy habits and whole foods, while providing nourishment for you mind, body and soul. Step by step, we will work together to identify your unique goals and to create effective strategies that will set you up for success. It would be a real honor to work with you. Please see below for a full list of my services.
            </p>
            <p className="pamela-quote"><i>
              You’ll flourish when you’re nourished
            </i></p>
          </div>
        </header>
      </div>
    );
  }
}
