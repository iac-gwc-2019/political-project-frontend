import React, {useEffect} from 'react';
import { SearchBar } from '../SearchBar/SearchBar'
import styled from 'styled-components'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import mainPic from '../../assets/newmainpic.png'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styles from './Home.scss'

export default function Home() {
  return (
    <div>
      <Row/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Row>
        <Col xs={6}>
          <h2 className={styles.header}> <strong> Search for subjects, politicians, & bills </strong></h2>
          <p className={styles.subheader}> Because political knowledge is power. </p>
          <br/>
          <SearchBar />
          <Link to="/all" style={{ textDecoration: 'none', color: '#7789AA' }}> >> Or see all</Link>
        </Col>
        <Col>
          <img src={mainPic} style={{width:490, height:390}}/>
        </Col>
      </Row>
    </div>
  )
}
