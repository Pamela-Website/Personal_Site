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
            <DropdownItem><Link className="nav-link" to="/about">ABOUT</Link></DropdownItem>
            <DropdownItem><Link className="nav-link" to="/offerings">OFFERINGS</Link></DropdownItem>
            <DropdownItem><Link className="nav-link" to="/resources">RESOURCES</Link></DropdownItem>
            <DropdownItem><Link className="nav-link" to="/blog">BLOG</Link></DropdownItem>
            <DropdownItem><Link className="nav-link" to='/contact'>CONTACT</Link></DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Link className="navbar-brand" to="/resources">
          <img className="logo" src="../../public/img/concept4-white.png" />
        </Link>
        <div  id="navbarNavDropdown" className="navbar-collapse collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resources">RESOURCES</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">BLOG</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">CONTACT</Link>
            </li>
            <li className="nav-item nav-menu-item">
              <IconMenu
                icon='OFFERINGS'
                menuRipple
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
          </ul>
        </div>
    </nav>
    )
   }
 }


/*   import React, { Component } from 'react';
 import { Link } from 'react-router-dom';
 import { Collapse, NavbarToggler, Navbar, NavbarBrand, Nav, NavItem, Dropdown, NavLink , DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
 import { Menu, IconMenu, MenuItem } from 'react-toolbox/lib/menu';

 export default class Navigation extends Component {
  constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar color="faded" light toggleable>
            <NavbarToggler right onClick={this.toggle} />
            <NavbarBrand href="/resources"><img className="logo" src="../../public/img/concept4-white.png" /></NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="nav-item">
                  <NavLink className="nav-link" href="/resources">RESOURCES</NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink className="nav-link" href="/recipes">RECIPES</NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink className="nav-link" href="/blog">BLOG</NavLink>
                </NavItem>
                <NavItem className="nav-item">
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
                </NavItem>
                <NavItem className="nav-item">
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
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
 }*/
