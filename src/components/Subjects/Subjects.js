import React, {useEffect, useState} from 'react';
import Title from './Title.js';
import Picture from './Picture.js';
import Summary from './Summary.js';
import BillsBlock from './BillsBlock.js';
import styles from './SubjectStyle.scss';
import jsonData from '../../../mock_data/subjects.json'; // TODO CLEANUP
import {Card} from 'react-bootstrap';
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Div from '../Divider/Div'
import Badge from 'react-bootstrap/Badge'

export default function Subjects() {
  const[subjectData, setSubjectData] = useState(null)
  useEffect(function() {
    if (!subjectData) {
      fetch('/')
        .then(response => {
          if(!response.ok) {
            return Promise.reject(data);
          }
          return jsonData;
        })
        .then(data => {
          setSubjectData(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  })
  return (
    <>
    <br/>
    <br/>
    <Row>
      <Col xs={2}>
        <div className={styles.image}>
          <Picture></Picture>
        </div>
      </Col>
      <Col>
        <Card style={{ width: '50rem' }}>
          <Card.Body>
            <Card.Title className={styles.title}>{subjectData ? subjectData.subject_name : null}</Card.Title>
            <Card.Subtitle></Card.Subtitle>
            <Card.Text> {subjectData ? subjectData.description : null} </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <br/>
    <Div/>
    <br/>
    <Row>
      <Col xs={2}/>
      <Col>
        <Badge className={styles.blockTitle} pill variant="primary">Relevant Bills</Badge>
      </Col>
    </Row>
    <Row>
    <Col xs={2}/>
    <Col>
      <BillsBlock></BillsBlock>
      <BillsBlock></BillsBlock>
      <BillsBlock></BillsBlock>
    </Col>
    </Row>
    </>
  );
}
