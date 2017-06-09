import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
  Nav,
  NavItem
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = ({pages}) => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={pages[0].route}>{pages[0].displayName}</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        {pages.slice(1).map((page, idx) => (
          <NavItem eventKey={idx}><Link to={page.route}>{page.displayName}</Link></NavItem>
        ))}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

NavbarComponent.propTyes = {
  pages: PropTypes.array.isRequired
};

export default NavbarComponent;
