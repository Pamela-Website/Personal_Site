 import React, { Component } from 'react';
 import { Link } from 'react-router-dom';
 import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
 import Menu from 'material-ui/Menu';
 import MenuItem from 'material-ui/MenuItem';

 export default class Navigation extends Component {
   constructor(props) {
      super(props);
        this.state = {
          dropdownOpen: false,
          open: false,
        };
        this.toggle = this.toggle.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
    }

    toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }

  handleTouchTap(event) {
     event.preventDefault();
     this.setState({
       open: true,
       anchorEl: event.currentTarget,
     });
   };

   handleRequestClose() {
     this.setState({
       open: false,
     });
   };

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
            <DropdownItem><li className="nav-item">
                <a className="nav-link" href="/#portfolio">PORTFOLIO</a>
              </li></DropdownItem>
            <DropdownItem><Link className="nav-link" to="/blog">BLOG</Link></DropdownItem>
            <DropdownItem><li className="nav-item">
                <a className="nav-link" href="/#contact">CONTACT</a>
              </li></DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Link className="navbar-brand" to="/"><strong>PAMELA SANDLER M.S.</strong></Link>
        <div  id="navbarNavDropdown" className="navbar-collapse collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/about">ABOUT</Link>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onMouseOver={this.handleTouchTap}
                onMouseOut={this.handleTouchTap}
                >OFFERINGS</div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#portfolio">PORTFOLIO
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">BLOG</Link>
            </li>
            <Popover
              open={this.state.open}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'middle', vertical: 'top'}}
              onRequestClose={this.handleRequestClose}
              animation={PopoverAnimationVertical}
            >
              <Menu className="menu">
                <MenuItem className="menu-item" primaryText="NUTRITIONAL COUNSELING" />
                <MenuItem className="menu-item" primaryText="GROUP SESSIONS" />
                <MenuItem className="menu-item" primaryText="CORPORATE WELLNESS" />
              </Menu>
            </Popover>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
    </nav>
    )
   }
 }
