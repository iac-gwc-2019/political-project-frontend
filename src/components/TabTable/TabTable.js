import React from 'react'
import {Tabs, Tab} from 'react-bootstrap';
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import TabPane from 'react-bootstrap/TabPane'
import { Nav, Navbar } from 'react-bootstrap';
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

export const TabTable = () => (
  <div>
  <br/>
  <br/>
  <br/>
  <br/>
  <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <Row>
      <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="first">Subjects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="second">Politicians</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="third">Bills</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
      <Tab.Pane eventKey="first">
        <p1>first content block </p1>
      </Tab.Pane>
      <Tab.Pane eventKey="second">
        <p2>second content block </p2>
      </Tab.Pane>
      <Tab.Pane eventKey="third">
        <p2>third content block </p2>
      </Tab.Pane>
    </Tab.Content>
  </Col>
  </Row>
  </Tab.Container>
  </div>
)
