import React from 'react';
import styles from './SubjectStyle.scss';
import { Link } from 'react-router-dom';
import {Card} from 'react-bootstrap';
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function BillsBlock({ bill }) {
  console.log(bill);
  return (
    <div>
      <Link to={`/bills/${bill.billSlug}`} className={styles.link}><div className={styles.infoBlock}>
        <div className={styles.info}>
          <h5>{bill.primary_subject}</h5>
          <p>{(bill && bill.summary_short && bill.summary_short.substring(0, 40)) || ''}...</p>
        </div>
        </div>
      </Link>
    </div>
  )
}
