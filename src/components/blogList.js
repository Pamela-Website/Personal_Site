import React, { Component } from 'react';
import BlogListEntry from './blogListEntry';

export default class BlogList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
// need to map the blog entries
  render() {
    return (
      <div>
      <div className="blog-list">
        <BlogListEntry />
      </div>
      <div className="blog-list">
        <BlogListEntry />
      </div>
      </div>
    )
  }
}

