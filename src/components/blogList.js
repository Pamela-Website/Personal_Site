import React, { Component } from 'react';
import BlogListEntry from './blogListEntry';
import $ from 'jquery';

export default class BlogList extends Component {
  componentDidMount() {
    document.body.style.backgroundImage = "url('../public/img/Chinatown.jpg')";
    document.body.style.fontFamily = 'Quicksand';
    document.body.style.backgroundSize = "initial";
    document.body.style.backgroundPosition = "initial";
  }

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

