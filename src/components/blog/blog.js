import BlogList from './blogList';
import React, { Component } from 'react';
import Navigation from '../navbar';

export default class Blog extends Component {
  render() {
    return (
      <div>
        <div className="blog">
          <Navigation />
          <header>
            <p className="blog-header">Nourish Roots L.A.</p>
            <p className="blog-description"> Discover how it feels to nourish your mind, body and soul.
            </p>
          </header>
          <hr />
        </div>
        <br />
        <div>
          <BlogList blogs={this.props.blogs} />
        </div>
      </div>
    )
  }
}

