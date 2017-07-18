import BlogList from './blogList';
import React, { Component } from 'react';
import $ from 'jquery';

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    }
  }

  getBlogs() {
    const data = {
      rss_url: 'https://medium.com/feed/@ariel.salem1989'
    }
    $.get('https://api.rss2json.com/v1/api.json', data, (res) => {
      if (res.status === 'ok') {
        this.setState({ blogs: res.items })
      }
    })
  }

  componentDidMount() {
    this.getBlogs();
  }

  render() {
    const blogs = this.state.blogs;
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
          <BlogList blogs={blogs} />
        </div>
      </div>
    )
  }
}

