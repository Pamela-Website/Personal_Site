import About from './about';
import Blog from './blog';
import Contact from './contact';
import Home from './home'
import $ from 'jquery';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import Navigation from './navbar';

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
      <MuiThemeProvider>
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
              <Route path="/contact" component={Contact}></Route>
            </div>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}
