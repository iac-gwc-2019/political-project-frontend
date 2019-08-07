import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import styles from './AllSubjects.scss';

export default function SubjectBlock({subject_name, short_summary}) {

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{subject_name}</Card.Title>
          <Card.Text>
            {short_summary}
          </Card.Text>
          <Button href="/womensrights" variant="outline-primary">Relevant Bills</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
