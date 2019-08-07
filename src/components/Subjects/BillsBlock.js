import React from 'react';
import styles from './SubjectStyle.scss';
import { Link } from 'react-router-dom';
import {Card} from 'react-bootstrap';
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function BillsBlock({ bill }) {

  return (
    <div>
      <Link to={`/bills/${bill.billSlug}`} className={styles.link}><div className={styles.infoBlock}>
        <img className={styles.img} src='http://icons.iconarchive.com/icons/icons8/windows-8/256/Ecommerce-Bill-icon.png'width='50px' height='50px'/>
        <h5>{bill.primary_subject}</h5>
        <p>{bill.summary_short.substring(0, 40)}...</p>
        </div>
      </Link>
    </div>
  )
}
