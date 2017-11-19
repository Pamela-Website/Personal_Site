import About from './bio/about';
import Blog from './blog/blog';
import Contact from './contact';
import Corporate from './offerings/corporate';
import Footer from './footer';
import Group from './offerings/group';
import Home from './home';
import Landing from './landing';
import Nutrition from './offerings/nutrition';
import Offerings from './offerings/offerings';
import Philosophy from './bio/philosophy';
import Recipe from './recipe';
import $ from 'jquery';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    }
  }

  getBlogs() {
    // const data = {
    //   rss_url: 'https://medium.com/feed/@psandler123'
    // }
    // $.get('https://api.rss2json.com/v1/api.json', data, (res) => {
    //   console.log('here is the response: ', res);
    //   if (res.status === 'ok') {
    //     this.setState({ blogs: res.items })
    //   }
    // })
    $.ajax({
      url: 'https://api.rss2json.com/v1/api.json',
      method: 'GET',
      dataType: 'json',
      data: {
        rss_url: 'https://medium.com/feed/@psandler123',
      }
    }).done((res) => {
      if (res.status === 'ok') {
        this.setState({ blogs: res.items })
      }
    })
  };

  componentDidMount() {
    this.getBlogs();
  };

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
              <div>
                <Route exact path="/" component={Landing}></Route>
                <Route path="/resources" component={Home}></Route>
                <Route path="/blog" render={() => (
                  <Blog blogs={blogs} />
                )}/>
                <Route path="/about-me" component={About}></Route>
                <Route path="/health-philosophy" component={Philosophy}></Route>
                <Route path="/testimonials" component={About}></Route>
                <Route path="/recipes" component={Recipe}></Route>
                <Route path="/contact" component={Contact}></Route>
                <Route path="/nutritional-counseling" component={Nutrition}></Route>
                <Route path="/services" component={Offerings}></Route>
                <Route path="/group-sessions" component={Group}></Route>
                <Route path="/corporate-wellness" component={Corporate}></Route>
              </div>
              <Footer />
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      );
    }
  };

  render() {
    const { blogs } = this.state;
    let path = window.location.pathname
    return (
      <div>
        {this.renderLanding(path, blogs)}
      </div>
    );
  };
};
