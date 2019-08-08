import React, {useEffect, useState} from 'react';
import Title from './Title.js';
import PoliticianInfo from './PoliticianInformation.js';
import Picture from './Picture.js';
import Summary from './Summary.js';
import BillsBlock from '../Subjects/BillsBlock.js';
import styles from './PoliticianStyle.scss';
import jsonData from '../../../mock_data/politicians.json'; // TODO CLEANUP
import {Card} from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import TweetSidebar from '../TweetSidebar/TweetSidebar';
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Badge from 'react-bootstrap/Badge'
import Div from '../Divider/Div'
import { getPeopleById } from '../../../fetch_data/functions/fetchPoliticans';

export default function Politicians({match}) {
  const[politicianData, setPoliticianData] = useState(null)
  useEffect(function() {
    if (!politicianData) {
      getPeopleById(match.params.politicianId)
        .then(data => {
          setPoliticianData(data)
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
            <Card.Title><Title short_title={politicianData ? politicianData.short_title : null} first_name={politicianData ? politicianData.first_name : null} middle_name={politicianData ? politicianData.middle_name : null} last_name={politicianData ? politicianData.last_name : null}></Title></Card.Title>
            <Card.Subtitle><PoliticianInfo website={politicianData ? politicianData.website : null} phone={politicianData ? politicianData.phone : null} party={politicianData ? politicianData.party : null}></PoliticianInfo></Card.Subtitle>
            <Card.Text> {politicianData ? politicianData.summary : null} </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <br/>
    <Div />
    <br/>
    <Row>
      <Col xs={1}>
      </Col>
      <Col>
      <Badge className={styles.blockTitle} pill variant="primary">Relevant Bills</Badge>
        {
          politicianData
          ? politicianData.bills.map((bill) => {
            return <BillsBlock key={bill.bill_id} bill={bill}/>
          })
          : null
        }
      </Col>
      <Col>
      {politicianData && <TweetSidebar twitter_account={politicianData.twitter_account}/>}
      </Col>
    </Row>
    </>
  );
}
