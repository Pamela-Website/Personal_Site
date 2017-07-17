import BlogList from './blogList';
import React, { Component } from 'react';
import oauth from '../../public/oauth.js'

export default class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  getBlogs() {
    // fetch(`https://medium.com/m/oauth/authorize?client_id=${oauth.clientId}
    // &scope=publishPost
    // &state={{state}}
    // &response_type=code
    // &redirect_uri={{redirectUri}}`)
    fetch(`https://api.medium.com/v1/users/${oauth.userId}/publications`, {
      method: 'GET',
      headers: {
        'Authorization': `ariel salem ${oauth.token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Accept-Charset': 'utf-8'
      }
    })
    .then((res) => res.json())
    .then((res) => {
      console.log('here is the response: ', res);
    })
    .catch((err) => {
      console.error('here is the error: ', err);
    })
  }

  componentDidMount() {
    this.getBlogs();
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
          <BlogList />
        </div>
      </div>
    )
  }
}

