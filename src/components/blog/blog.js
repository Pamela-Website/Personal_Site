import BlogList from './blogList';
import React, { Component } from 'react';

export default class Blog extends Component {
  render() {
    return (
      <div>
        <div className="blog">
          <header>
            <p className="blog-header">Pamela Sandler</p>
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

