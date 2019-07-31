import React, {useEffect} from 'react';
import React from 'react';
import { SearchBar } from '../Search/SearchBar'
import styled from 'styled-components'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import mainPic from '../../assets/main.png'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <br/>
      <br/>
      <Row>
        <Col xs={6}>
          <h2 style={{ color: '#000080' }}> Search for subjects, politicians, bills</h2>
          <p style={{ color: '#008080' }}> Because political knowledge is power. </p>
        </Col>
        <Col>
          <img src={mainPic} style={{width:520, height:410}}/>
        </Col>
      </Row>
      <SearchBar />
      <Link to="/all" style={{ textDecoration: 'none', color: '#7789AA' }}> >> Or see all</Link>
    </div>
  )
}
