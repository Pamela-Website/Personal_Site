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
          <p className="intro-name">PAMELA SANDLER M.S.</p>
        </div>
        <div className='row intro-description'>
          <p className="intro-description">Whole Foods Nutrition | Recipe Creation | Mind-Body Wellness | Women’s Health & Wellbeing </p>
        </div>
        <div className='row enter-button'>
          <button className="enter" onClick={this.enterSite}>ENTER</button>
        </div>
        <div className="intro-icons">
          <a target="_blank" className="a-intro" href="https://www.linkedin.com/in/ariel-salem/">
            <i className="fa fa-linkedin" aria-hidden="true"/>
          </a>
          <a target="_blank" className="a-intro" href="https://github.com/Asalem1">
            <i className="fa fa-facebook" aria-hidden="true"/>
          </a>
          <a target="_blank" className="a-intro" href="https://github.com/Asalem1">
            <i className="fa fa-instagram" aria-hidden="true"/>
          </a>
          <a target="_blank" className="a-intro" href="https://github.com/Asalem1">
            <i className="fa fa-pinterest" aria-hidden="true"/>
          </a>
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
      autoplaySpeed: 5000,
      pauseOnHover: false,
    }
    return (
      <div>
        <Slider {...settings}>
        <div className="landing-slider-1">
          {this.intro()}
        </div>
        <div className="landing-slider-2">
          {this.intro()}
        </div>
        <div className="landing-slider-3">
          {this.intro()}
        </div>
        <div className="landing-slider-4">
          {this.intro()}
        </div>
        <div className="landing-slider-5">
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
