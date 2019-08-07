import React from 'react';
import styles from '../Politicians/PoliticianStyle.scss';
import { Card } from 'react-bootstrap'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function Recent ({latest_major_action_date, latest_major_action}) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">Latest Action Date: {latest_major_action_date} <br/> Latest Action: {latest_major_action}</Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  )
}
