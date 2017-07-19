import React, { Component } from 'react';
import BlogListEntry from './blogListEntry';
import $ from 'jquery';

export default class BlogList extends Component {
  render() {
    return (
      <div>
        {this.props.blogs.map((blog, i) => {
          const summary = $(blog.description).text();
          if (summary.length > 100) {
            return (
              <div className="blog-list">
                <BlogListEntry key={i} {...blog} />
              </div>
            )
          }
          })
        }
      </div>
    )
  }
}

