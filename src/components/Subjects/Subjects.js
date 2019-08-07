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
import Astrodivider from '../Astrodivider/Astrodivider';
import Div from '../Divider/Div'
import { getBillsBySubject } from '../../../fetch_data/functions/fetchBills';

export default function Subjects({history, match}) {
  const[subjectData, setSubjectData] = useState(null)
  useEffect(function() {
    if (!subjectData) {
      getBillsBySubject(match.params.subjectName)
        .then(data => {
          setSubjectData(data)
        })
        .catch(err => {
          history.push('/404')
        })
    }
  })
  return (
    <div className={styles.main}>

    <Row>
      <Col xs={2}>
        <div className={styles.image}>
          <Picture></Picture>
        </div>
      </Col>
      <Col>
        <Card style={{ width: '50rem' }}>
          <Card.Body>
            <Card.Title className={styles.title}>{subjectData ? match.params.subjectName : null}</Card.Title>
            <Card.Subtitle></Card.Subtitle>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit tincidunt pulvinar. Etiam accumsan rhoncus fringilla. Proin nulla ex, varius quis dictum aliquet, placerat pulvinar augue. Fusce auctor enim quis lobortis pharetra. Pellentesque imperdiet viverra pulvinar. Integer at suscipit metus. Aliquam pharetra tellus ac turpis eleifend interdum ac a lorem. Sed rhoncus dictum ex lacinia condimentum. Etiam auctor nibh sed orci ultricies maximus. Vestibulum quam ligula, ultricies et neque sed, suscipit bibendum est. Nulla sollicitudin dapibus vehicula. Nullam pulvinar lacinia arcu. Etiam elementum diam id efficitur pulvinar.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <br/>
    <Div/>
    <br/>
    <Row>
      <h4 className={styles.blockTitle}>Relevant bills</h4>
    </Row>
    <Row>
    <Col xs={2}/>
    <Col>
      {
        subjectData
          ? subjectData.map((bill) => {
            return <BillsBlock key={bill.bill_id} bill={bill}/>
          })
          : null
      }
    </Col>
    </Row>
    </div>
  );
}
