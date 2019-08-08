import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupDropdown,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  FormControl,
  DropdownItem
} from 'react-bootstrap';
 import styled from 'styled-components'

const Styles = styled.div`
  .button {
    background: #398eb2;
    color: FEFEFF;
    border: none;
    border-radius: 9px;
    width: 80px;
  }
  .form {
    width: 85%;
  }
`
export const SearchBar = () => (
  <Styles>
    <InputGroup className="form">
    <FormControl type="text" placeholder="Search" />
    <InputGroup.Append>
      <Button className = "button" href="/yoursearchterm"><i className="fa fa-search"></i></Button>
    </InputGroup.Append>
   </InputGroup>
  </Styles>
)
