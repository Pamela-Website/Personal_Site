import React, { Component } from 'react';
import Slider from 'react-slick';

export default class Landing extends Component {
  enterSite() {
    window.location.href = '/about-me'
  };

  intro() {
    return (
      <div className="intro">
        <div className="row">
          <div className="col-xs-12">
            <div className='row intro-name'>
              <img className="intro-logo" src="../../public/img/landing-logo.png" />
            </div>
            <div className='row intro-description'>
              <p className="intro-description">Whole Foods Nutrition | Recipe Creation | Mind-Body Wellness | Women’s Health & Wellbeing </p>
            </div>
            <div className='row enter-button'>
              <button className="enter" onClick={this.enterSite}>ENTER</button>
            </div>
            <div className="intro-icons">
              <a target="_blank" className="a-intro" href="contact">
                <i className="fa fa-envelope" aria-hidden="true"/>
              </a>
              <a target="_blank" className="a-intro" href="https://www.facebook.com/nourishrootsnutrition/">
                <i className="fa fa-facebook-official" aria-hidden="true"/>
              </a>
              <a target="_blank" className="a-intro" href="https://www.instagram.com/nourishroots/">
                <i className="fa fa-instagram" aria-hidden="true"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  };

  render() {
    const settings = {
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
    };
    return (
      <div>
        <Slider {...settings}>
          <div id="landing">
            <img src="../../public/img/img-1.jpeg" />
          </div>
          <div id="landing">
            <img src="../../public/img/img-2.jpg" />
          </div>
          <div id="landing">
            <img src="../../public/img/img-3.jpeg" />
          </div>
          <div id="landing">
            <img src="../../public/img/img-4.jpg" />
          </div>
          <div id="landing">
            <img src="../../public/img/img-5.jpg" />
          </div>
        </Slider>
        <div>
          {this.intro()}
        </div>
      </div>
    )
  };
};

/*              <a target="_blank" className="a-intro" href="https://www.pinterest.com/nourishroots/">
                <i className="fa fa-pinterest" aria-hidden="true"/>
              </a>
      */
