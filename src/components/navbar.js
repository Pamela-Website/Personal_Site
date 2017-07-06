 import React from 'react';
 import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

 export default class addTask extends React.Component {
   constructor(props) {
      super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }

    toggle() {
      this.setState({ isOpen: !this.state.isOpen });
    }

   render() {
     return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#"><strong>AS ARIEL SALEM</strong></a>
        <div  id="navbarNavDropdown" className="navbar-collapse collapse">
          <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">ABOUT ME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">PROJECTS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">BLOG</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">CONTACT ME</a>
              </li>
          </ul>
        </div>
    </nav>
    )
   }
 }
