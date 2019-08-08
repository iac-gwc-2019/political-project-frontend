import React, {useEffect, useState} from 'react';
import styles from './BillStyle.scss';
import BillInfo from './BillInfo';
import BillSponsor from './BillSponsor';
import Picture from './Picture';
import Recents from './Recents'
import Summary from './Summary';
import jsonData from '../../../mock_data/bills.json'; // TODO CLEANUP
import {Card} from 'react-bootstrap';
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import Div from '../Divider/Div';
import { getBillById } from '../../../fetch_data/functions/fetchBills';

export default function Bills({match}) {
  const[billData, setBillData] = useState(null)
  useEffect(function() {
    if (!billData) {
      getBillById(match.params.billSlug)
        .then(data => {
          setBillData(data)

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
              <Card.Title className={styles.title}>{billData ? billData.bill_name : null}</Card.Title>
              <Card.Subtitle><BillInfo primary_subject={billData ? billData.primary_subject : null}
                bill_id={billData ? billData.bill_id : null}></BillInfo></Card.Subtitle>
              <Card.Text> <Summary summary={billData ? billData.summary : null}></Summary></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br/>
      <Div />
      <br/>
      <Row>
        <Col xs={1}/>
        <Col xs={6}>
          <Badge className={styles.blockTitle} pill variant="primary">Sponsor Person</Badge>
        </Col>
        <Col>
          <Badge className={styles.blockTitle} pill variant="primary">Recent Action</Badge>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col xs={1}/>
        <Col xs={6}>
        <BillSponsor
          sponsor_name={billData ? `${billData.sponsor.first_name} ${billData.sponsor.last_name}` : 'default name'}
          sponsor_party={billData ? billData.sponsor.sponsor_party : 'default name'}
          website={billData ? billData.sponsor.website : 'default name'}
          phone={billData ? billData.sponsor.phone : 'default name'}>
        </BillSponsor>
        </Col>
        <Col>
          <Recents
            latest_major_action_date={billData ? billData.latest_major_action_date : 'default name'}
            latest_major_action={billData ? billData.latest_major_action : 'default name'}>
          </Recents>
        </Col>
      </Row>
      </>
    );
}
