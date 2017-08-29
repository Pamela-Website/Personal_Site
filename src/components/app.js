import About from './about';
import Blog from './blog/blog';
import Contact from './contact';
import Corporate from './offerings/corporate';
import Footer from './footer';
import Group from './offerings/group';
import Home from './home';
import Landing from './landing';
import Nutrition from './offerings/nutrition';
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
      rss_url: 'https://medium.com/feed/@psandler123'
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

  renderLanding(path, blogs) {
    if (path === '/') {
      return (
        <div>
          <Landing />
        </div>
      )
    } else {
      return (
        <MuiThemeProvider>
          <BrowserRouter>
            <div>
              <Navigation />
              <div>
                <Route exact path="/" component={Landing}></Route>
                <Route path="/resources" component={Home}></Route>
                <Route path="/blog" render={() => (
                  <Blog blogs={blogs} />
                )}/>
                <Route path="/about" component={About}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Route path="/nutritional-counseling" component={Nutrition}></Route>
                <Route path="/group-sessions" component={Group}></Route>
                <Route path="/corporate-wellness" component={Corporate}></Route>
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      );
    }
  }

  render() {
    const blogs = this.state.blogs;
    let path = window.location.pathname
    return (
      <div>
        {this.renderLanding(path, blogs)}
      </div>
    );
  }
}
