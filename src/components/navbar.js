 import React, { Component } from 'react';
 import { Link } from 'react-router-dom';
 import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
 import { Menu, IconMenu, MenuItem } from 'react-toolbox/lib/menu';

 export default class Navigation extends Component {
   constructor(props) {
      super(props);
        this.state = {
          dropdownOpen: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }

   render() {
     return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded navMaster">
        <Dropdown className="navbar-toggler navbar-toggler-right btn" type="button" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle>
              <span className="menu-button">MENU <span className="navbar-toggler-icon" onClick={this.toggle}>
              </span></span>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem><Link className="nav-link" to="/about-me">ABOUT ME</Link></DropdownItem>
            <DropdownItem><Link className="nav-link" to="/health-philosophy">HEALTH PHILOSOPHY</Link></DropdownItem>
            <DropdownItem><Link className="nav-link" to="/testimonials">TESTIMONIALS</Link></DropdownItem>
            <DropdownItem><Link className="nav-link" to="/resources">RESOURCES</Link></DropdownItem>
            <DropdownItem><Link className="nav-link" to="/recipes">RECIPES</Link></DropdownItem>
            <DropdownItem><Link className="nav-link" to="/blog">BLOG</Link></DropdownItem>
            <DropdownItem><Link className="nav-link" to='/contact'>CONTACT</Link></DropdownItem>
            <DropdownItem><Link className="nav-link" to="/services">SERVICES</Link></DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Link className="navbar-brand" to="/resources">
          <img className="logo" src="../../public/img/concept4-white.png" />
        </Link>
        <div  id="navbarNavDropdown" className="navbar-collapse collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/resources">RESOURCES</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recipes">RECIPES</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">BLOG</Link>
            </li>
            <li className="nav-item">
              <IconMenu
                icon='SERVICES'
                iconRipple={false}
              >
                <MenuItem>
                    <Link className="menu-item" to="/nutritional-counseling">NUTRITIONAL COUNSELING</Link>
                </MenuItem>
                <MenuItem >
                    <Link className="menu-item" to="/group-sessions">GROUP SESSIONS</Link>
                </MenuItem>
                <MenuItem>
                    <Link className="menu-item" to="/corporate-wellness">CORPORATE WELLNESS</Link>
                </MenuItem>
              </IconMenu>
            </li>
            <li className="nav-item">
              <IconMenu
                icon='BIO & CONTACT'
                iconRipple={false}
              >
                <MenuItem>
                    <Link className="menu-item" to="/about-me">ABOUT ME</Link>
                </MenuItem>
                <MenuItem >
                    <Link className="menu-item" to="/health-philosophy">HEALTH PHILOSOPHY</Link>
                </MenuItem>
                <MenuItem>
                    <Link className="menu-item" to="/testimonials">TESTIMONIALS</Link>
                </MenuItem>
                <MenuItem>
                    <Link className="menu-item" to="/contact">CONTACT</Link>
                </MenuItem>
              </IconMenu>
            </li>
          </ul>
        </div>
    </nav>
    )
   }
 }
