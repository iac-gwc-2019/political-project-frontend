import React from 'react'
import styled from 'styled-components'
import errorPic from '../../assets/404.png'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

const Component = styled.div`
  .errorMessageText {
    color: #FEFEFF;
  }
`;

export default function NoMatch() {
  return (
    <div>
      <br/>
      <br/>
      <Row>
        <Col xs={4}>
          <h2 style={{ color: '#000080' }}> OOPS.</h2>
          <p style={{ color: '#008080' }}> Looks like you've <br/> stumbled into area 51. </p>
        </Col>
        <Col>
          <img src={errorPic} style={{width:520, height:410}}/>
        </Col>
      </Row>
    </div>
 )
}
