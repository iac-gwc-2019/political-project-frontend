import React from 'react'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

export const Layout = (props) => (
  <Container>
    {props.children}
  </Container>
)
