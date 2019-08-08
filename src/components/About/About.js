import React from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Ballot from '../../assets/ballot.png';
import styles from './About.scss';

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
        <Col xs={4} className={styles.text}>
          <div className={styles.title}><h2> <strong>About politigo</strong></h2></div>
          <br />
          <div className={styles.info}><p> We seek to inform and educate Americans about local, state and national politics by providing a platform where accessing political knowledge is easy and clear, in order to empower them to become actively engaged voters, advocates, communicators and challengers in their civic lives. </p></div>
        </Col>
        <Col>
          <img src={Ballot}/>
        </Col>


        </Row>
    </div>
  )
}
