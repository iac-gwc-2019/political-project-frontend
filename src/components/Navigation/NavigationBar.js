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
      color: #78C1CA;
    }
  }
  .ml-auto {
    font-family: Avenir;
    font-weight: bold;
    font-size: 25px;
    margin-right: 50px;
  }
  .navbar-brand {
    margin-left: 20px;
  }
  .btn {
    font-family: Avenir;
    background: #78C1CA;
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
              <Link to="/subjects">Subjects</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/politicians">Politicians</Link>
          </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/bills">Bills</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Form inline>
          <Button className = "btn" href="/about">about politigo</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)
