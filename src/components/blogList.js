import React, { Component } from 'react';
import BlogListEntry from './blogListEntry';

export default class BlogList extends Component {
  render() {
    return (
      <div>
        {this.props.blogs.map((blog, i) => {
            return (
              <div className="blog-list">
                <BlogListEntry key={i} {...blog} />
              </div>
            )
          })
        }
      </div>
    )
  }
}

