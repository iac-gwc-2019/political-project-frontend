// Component that holds logo and nav bar

import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo'
import NavigationBar from './NavigationBar';
import styles from './Navigation.scss'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default function Navigation() {
  return (
    <div className={styles.column}>
      <Logo />
      <NavigationBar />
    </div>
  )
}
