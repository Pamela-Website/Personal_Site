import About from './about';
import Blog from './blog';
import Home from './home'
import Navigation from './navbar';
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import $ from 'jquery';

export default class App extends Component {
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
      <BrowserRouter>
        <div>
          <Navigation />
          <div>
            <Route exact path="/" component={Home}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/blog" render={() => (
              <Blog blogs={blogs} />
            )}/>
            <Route path="/about" component={About}></Route>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
