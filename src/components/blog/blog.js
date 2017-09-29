import BlogList from './blogList';
import React, { Component } from 'react';
import Navigation from '../navbar';

export default class Blog extends Component {
  render() {
    return (
      <div className="blogs">
        <div className="blog">
          <Navigation />
          <header>
            <img className="blog-logo" src="../../../public/img/concept4-white.png" />
            <p className="blog-description"> Discover how it feels to nourish your mind, body and soul.
            </p>
          </header>
        </div>
        <hr />
        <div>
          <BlogList blogs={this.props.blogs} />
        </div>
      </div>
    )
  }
}

//            <p className="blog-header">Nourish Roots L.A.</p> <-- this is the alternative header
