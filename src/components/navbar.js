import AppBar from 'material-ui/AppBar';
import HorizIcon from 'material-ui/svg-icons/navigation/more-horiz';
import IconButton from 'material-ui/IconButton';
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
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  render() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-faded">
      <Link className="navbar-brand" to="/about-me">
        <img className="logo" src="../../public/img/concept4-white.png" />
      </Link>
      <Dropdown className="navbar-toggler btn" type="button" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle>
            <span className="menu-button"><span className="navbar-toggler-icon" onClick={this.toggle}>
            </span></span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem><Link className="nav-link" to="/about-me">ABOUT ME</Link></DropdownItem>
          <DropdownItem><Link className="nav-link" to="/health-philosophy">HEALTH PHILOSOPHY</Link></DropdownItem>
          <DropdownItem><Link className="nav-link" to="/resources">RESOURCES</Link></DropdownItem>
          <DropdownItem><Link className="nav-link" to="/recipes">RECIPES</Link></DropdownItem>
          <DropdownItem><Link className="nav-link" to="/blog">BLOG</Link></DropdownItem>
          <DropdownItem><Link className="nav-link" to='/contact'>CONTACT</Link></DropdownItem>
          <DropdownItem><Link className="nav-link" to="/services">SERVICES</Link></DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
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
              <Link className='menu-item' to='/nutritional-counseling' >
                <MenuItem className='menu-item' caption='NUTRITIONAL COUNSELING' />
              </Link>
              <Link className="menu-item" to="/corporate-wellness">
                <MenuItem className='menu-item' caption='CORPORATE WELLNESS' />
              </Link>
            </IconMenu>
          </li>
          <li className="nav-item">
            <IconMenu
              icon='BIO & CONTACT'
              iconRipple={false}
            >
              <Link className="menu-item" to="/about-me">
                <MenuItem className='menu-item' caption='ABOUT ME' />
              </Link>
              <Link className="menu-item" to="/health-philosophy">
                <MenuItem className='menu-item' caption='HEALTH PHILOSOPHY' />
              </Link>
              <Link className="menu-item" to="/contact">
                <MenuItem className='menu-item' caption='CONTACT' />
              </Link>
            </IconMenu>
          </li>
        </ul>
      </div>
    </nav>
    )
  }
}


/*<nav className="navbar navbar-expand-lg navbar-light bg-faded">
      <Link className="navbar-brand" to="/about-me">
        <img className="logo" src="../../public/img/concept4-white.png" />
      </Link>
      <Dropdown className="navbar-toggler btn" type="button" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle>
            <span className="menu-button"><span className="navbar-toggler-icon" onClick={this.toggle}>
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
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
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
              <Link className='menu-item' to='/nutritional-counseling' >
                <MenuItem className='menu-item' caption='NUTRITIONAL COUNSELING' />
              </Link>
              <Link className="menu-item" to="/group-sessions">
                <MenuItem className='menu-item' caption='GROUP SESSIONS' />
              </Link>
              <Link className="menu-item" to="/corporate-wellness">
                <MenuItem className='menu-item' caption='CORPORATE WELLNESS' />
              </Link>
            </IconMenu>
          </li>
          <li className="nav-item">
            <IconMenu
              icon='BIO & CONTACT'
              iconRipple={false}
            >
              <Link className="menu-item" to="/about-me">
                <MenuItem className='menu-item' caption='ABOUT ME' />
              </Link>
              <Link className="menu-item" to="/health-philosophy">
                <MenuItem className='menu-item' caption='HEALTH PHILOSOPHY' />
              </Link>
              <Link className="menu-item" to="/testimonials">
                <MenuItem className='menu-item' caption='TESTIMONIALS' />
              </Link>
              <Link className="menu-item" to="/contact">
                <MenuItem className='menu-item' caption='CONTACT' />
              </Link>
            </IconMenu>
          </li>
        </ul>
      </div>
    </nav>*/
