import BlogList from './blogList';
import Footer from './footer';
import React, { Component } from 'react';

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div className="blog">
          <header>
            <p className="blog-header">Ariel Salem</p>
            <p className="blog-description"> Lover of Tech, Programming, and all things JavaScript </p>
          </header>
          <hr />
        </div>
        <br />
        <div>
          <BlogList blogs={this.props.blogs} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

