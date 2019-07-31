<<<<<<< HEAD
import React, {useEffect} from 'react';
import SearchBar from '../SearchBar/SearchBar'
import styles from './Home.scss'
import { Container, Row, Col } from 'react-grid-system';
import img from '../../assets/pictures/political.jpg'
import Navigation from '../Navigation/Navigation'
import NavigationBar from '../Navigation/NavigationBar';

var dataText = ["Search for causes, <br/> politicians, bills"];
var animationStarted=false;

export default function Home() {
  // start the text animation
  // useEffect gets called when component gets mounted (just once)
  useEffect(()=>{
    if (!animationStarted){
        StartTextAnimation(0);
        animationStarted=true;
    }
  });

  return(
    <div className={styles.background}>
      <Container>
      <Row align ="start">
          <Navigation />
      </Row>
      <Row align="center">
        <Col xs={12} md={8}>
          <div className={styles.typewriter}>
            <h2 className={styles.typewritertext}> Search for causes,<br/>politicians, bills </h2>
          </div>
        </Col>
        <Col xs={6} md={4}>
          <img className={styles.img} src={img} width="450" height="450"/>
        </Col>
        </Row>
        <Row align="end">
          <SearchBar />
        </Row>
      </Container>
    </div>
  )
}
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
      document.querySelector(`.${styles.typewritertext}`).innerHTML = text.substring(0, i+1) +`<span class="${styles.blinker}"" aria-hidden="true"></span>`;
      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 2000);
     }
     // check if dataText[i] exists
    else if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
=======
import React from 'react';
import { SearchBar } from '../Search/SearchBar'
import styled from 'styled-components'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import mainPic from '../../assets/main.png'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <br/>
      <br/>
      <Row>
        <Col xs={6}>
          <h2 style={{ color: '#000080' }}> Search for subjects, politicians, bills</h2>
          <p style={{ color: '#008080' }}> Because political knowledge is power. </p>
        </Col>
        <Col>
          <img src={mainPic} style={{width:520, height:410}}/>
        </Col>
      </Row>
      <SearchBar />
      <Link to="/all" style={{ textDecoration: 'none', color: '#7789AA' }}> >> Or see all</Link>
    </div>
  )
}
>>>>>>> 5bf01b5... integrated app with react bootstrap for prettier
