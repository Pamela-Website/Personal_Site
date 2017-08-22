import React, { Component } from 'react';
import $ from 'jquery';

export default class BlogListEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      summary: ''
    }
  }

  renderTitle() {
    const title = this.props.title;
    const replaced = {
      '&lt;': '<',
      '&amp;': '&'
    }
    const reg = new RegExp(Object.keys(replaced).join('|'), 'gi');
    const newTitle = title.replace(reg, (matched) => {
      return replaced[matched]
    })
    this.setState({ title: newTitle });
  }

  renderSummary() {
    const summary = $(this.props.description).text();
    const newSummary = summary.substring(0, 751) + '...';
    this.setState({ summary: newSummary })
  }

  componentDidMount() {
    this.renderTitle();
    this.renderSummary();
  }

  render() {
    const { link, pubDate } = this.props
    return (
      <div className="blog-list-entry">
        <div className="blog-title">
          <p>{this.state.title}</p>
        </div>
        <div className="blog-summary">
          <a target="_blank" href={link} className="blog-link">
            <p>{this.state.summary}</p>
          </a>
        </div>
      </div>
    )
  }
}

