 import React, { Component } from 'react';
 import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
 import { Link } from 'react-router-dom';

 export default class Navigation extends Component {
   constructor(props) {
      super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }

    toggle() {
      console.log('this is toggled')
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

   render() {
     return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded navMaster">
        <button className="navbar-toggler navbar-toggler-right btn" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">MENU  <span className="navbar-toggler-icon" onClick={this.toggle}></span>
        </button>
        <Link className="navbar-brand" to="/"><strong>AS ARIEL SALEM</strong></Link>
        <div  id="navbarNavDropdown" className="navbar-collapse collapse">
          <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/about">ABOUT ME</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#projects">PROJECTS</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">BLOG</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#contact">CONTACT</a>
              </li>
          </ul>
        </div>
    </nav>
    )
   }
 }
