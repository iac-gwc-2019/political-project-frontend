import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Ballot from '../../assets/ballot.png';
import Team from './Team';

export default function About() {
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <Row>
        <Col xs={1}>
        </Col>
        <Col xs={5}>
          <h2 style={{ color: '#000080' }}> About politigo</h2>
          <br />
          <p style={{ color: '#008080' }}>  We seek to inform and educate Americans about local, state and national politics by providing a platform where accessing political knowledge is easy and clear, in order to empower them to become actively engaged voters, advocates, communicators and challengers in their civic lives. </p>
        </Col>
        <Col>
          <img src={Ballot} style={{width:520, height:410}}/>
        </Col>


        </Row>
    </div>
  )
}
