import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../styles/Navbar.css';
import MyLogo from "../images/chlogo.png";
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
  DropdownItem,
  NavbarText
  
} from 'reactstrap';








const Navbars = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"> <img className="MyLogo" src={MyLogo} ></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem> 
          <NavLink color="#black;" to='/Home'>  <Link to='/'><b><h1>Home</h1></b></Link></NavLink>
          </NavItem>
          <NavItem>
          <NavLink to='/Cyber'>  <Link to='/Cyber'><b><h1>Cyber Security</h1></b></Link></NavLink>
          </NavItem>
          <NavItem>
          <NavLink to='/Linux'>  <Link to='/Linux'><b><h1>Linux</h1></b></Link></NavLink>
          </NavItem>
          <NavItem>
          <NavLink to='/Portfolio'>  <Link to='/Portfolio'><b><h1>Portfolio</h1></b></Link></NavLink>
          </NavItem>
          <NavItem>
          <NavLink to='Contact'>  <Link to='/Contact'><b><h1>Contact</h1></b></Link></NavLink>
          </NavItem>
            
         
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbars;














