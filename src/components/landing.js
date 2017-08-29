import React, { Component } from 'react';
import Slider from 'react-slick';


export default class Landing extends Component {
  enterSite() {
    window.location.href = '/resources'
  }

  intro() {
    return (
      <div className="intro">
        <div className='row intro-name'>
          <p className="intro-name">PAMELA SANDLER</p>
        </div>
        <div className='row intro-description'>
          <p className="intro-description">Recipe Developer | Fitness Lover | Holistic Lifestyle | Balancing Hormones</p>
        </div>
        <div className='row enter-button'>
          <button className="enter" onClick={this.enterSite}>ENTER</button>
        </div>
      </div>
    )
  }

  render() {
    let settings = {
      arrows: false,
      centerMode: true,
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      fade: true,
      draggable: false,
      autoplaySpeed: 3000,
      pauseOnHover: false,
    }
    return (
      <div>
        <Slider {...settings}>
        <div className="landing-slider">
          {this.intro()}
        </div>
        <div className="landing-slider">
          {this.intro()}
        </div>
        <div className="landing-slider">
          {this.intro()}
        </div>
        <div className="landing-slider">
          {this.intro()}
        </div>
        <div className="landing-slider">
          {this.intro()}
        </div>
        </Slider>
      </div>
    )
  }
}

/*<div className="landing-slider">
            {this.intro()}
          </div>
          <div className="landing-slider">
            {this.intro()}
          </div>
          <div className="landing-slider">
            {this.intro()}
          </div>
          <div className="landing-slider">
            {this.intro()}
          </div>
          <div className="landing-slider">
            {this.intro()}
          </div>*/
