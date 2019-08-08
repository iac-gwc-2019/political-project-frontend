import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import styles from './AllSubjects.scss';


export default function SubjectBlock({subject_name, short_summary, image, slug}) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img className={styles.img} variant="top" src={image} />
        <Card.Body>
          <Card.Title>{subject_name}</Card.Title>
          <Card.Text>
            {short_summary}
          </Card.Text>
          <Link to={`/subjects/${slug}`}><Button variant="outline-primary">Learn more</Button></Link>

        </Card.Body>
      </Card>
    </div>
)
}
