import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
const Styles = styled.div`
 .navbar {
   background-color: #FEFEFF;
 }
 a, .navbar-brand, .navbar-nav .nav-link {
   color: #7789AA;
   text-decoration: none;
   &:hover {
     color: #398eb2
;
   }
 }
 .ml-auto {
   font-family: 'Avenir';
   font-size: 25px;
   margin-right: 50px;
 }
 .navbar-brand {
   margin-left: 20px;
 }
 .btn {
   font-family: 'Avenir';
   background: #398eb2;
   color: white;
   border: none;
   border-radius: 9px;
   width: 200px;
 }
`;
export const NavigationBar = () => (
 <Styles>
   <Navbar expand="lg">
     <Navbar.Brand href="/"><img src={logo} style={{width:100}}/></Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav"/>
     <Navbar.Collapse id="basic-navbar-nav">
       <Nav className="ml-auto">
         <Nav.Item>
           <Nav.Link>
             <Link to="/subjects">subjects</Link>
           </Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link>
             <Link to="/politicians">politicians</Link>
         </Nav.Link>
         </Nav.Item>
       </Nav>
       <Form inline>
         <Link className = "btn" to="/about">about politigo</Link>
       </Form>
     </Navbar.Collapse>
   </Navbar>
 </Styles>
)
