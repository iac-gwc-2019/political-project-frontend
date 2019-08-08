import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import styles from './AllSubjects.scss';
import SubjectBlock from './SubjectBlock';
import jsonData from '../../../../mock_data/subjects.json'; // TODO CLEANUP
import womensrightsimg from "../../../assets/womensrights.jpg"
import religionsimg from "../../../assets/religions.jpg"
import raceimg from "../../../assets/race.png"
import fpimg from "../../../assets/foreignpolicy.jpg"
import environmentimg from "../../../assets/environment.png"
import healthcareimg from "../../../assets/health.jpg"
import economyimg from "../../../assets/economy.jpg"
import educationimg from "../../../assets/education.jpg"
import nsimg from "../../../assets/nationalsecurity.jpg"
import cjimg from "../../../assets/criminaljustice.jpg"
import lgbtqimg from "../../../assets/lgbtq.jpg"
import immigrationimg from "../../../assets/immigrants.jpg"

export default function AllSubjects() {
  const[subjectData, setSubjectData] = useState(null)
  useEffect(function() {
    if (!subjectData) {
      fetch('/')
        .then(response => {
          if(!response.ok) {
            return Promise.reject(data);
          }
          return jsonData;
        })
        .then(data => {
          setSubjectData(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  })
  return (
    <div className={styles.main}>
      <br/>
      <h2 className={styles.header}>Subjects</h2>
      <p className={styles.subheader}>Browse subjects or learn more to discover relevant bills:</p>
      <Container>
        <Row className={styles.rows}>
          <Col>
          <SubjectBlock
            slug={"women"}
            subject_name={"Women's Rights"}
            short_summary={"Women's rights are the rights & entitlements claimed for women worldwide which formed the basis for the women's rights movement in the 19th century."}
            image={womensrightsimg}>
            </SubjectBlock>
          </Col>

          <Col>
          <SubjectBlock
              slug={"citizenship"}
              subject_name={"Racial Inequality"}
              short_summary={"Racial inequality in the United States identifies the social advantages & disparities that affect different races within the United States."}
              image={raceimg}>
            </SubjectBlock>
          </Col>

          <Col>
          <SubjectBlock
              slug={"religion"}
              subject_name={"Religion"}
              short_summary={"The First Amendment to the United States Constitution says that everyone in the United States has the right to practice his or her own religion, or no religion at all."}
              image={religionsimg}>
            </SubjectBlock>
          </Col>
        </Row>

        <Row className={styles.rows}>
          <Col>
          <SubjectBlock
              slug={"africa"}
              subject_name={"Foreign Policy"}
              short_summary={"Foreign policy or foreign relations refers to how a government deals with other countries, which includes such matters as trade & defense."}
              image={fpimg}>
            </SubjectBlock>
          </Col>

          <Col>
          <SubjectBlock
              slug={"immigration"}
              subject_name={"Immigration"}
              short_summary={"Immigration policy refers to the transit of persons across borders into a country, especially those who intend to work & stay in that country."}
              image={immigrationimg}>
            </SubjectBlock>
          </Col>

          <Col>
          <SubjectBlock
              slug={"climate"}
              subject_name={"Environmental Policy"}
              short_summary={"Environmental policy is the commitment of an organization to the laws, regulations, & other policy mechanisms concerning the environment."}
              image={environmentimg}>
            </SubjectBlock>
          </Col>
        </Row>

        <Row className={styles.rows}>
          <Col>
          <SubjectBlock
              slug={"health"}
              subject_name={"Healthcare"}
              short_summary={"Health policy refers to decisions, plans, & actions which were undertaken to achieve specific health care goals within the United States."}
              image={healthcareimg}>
            </SubjectBlock>
          </Col>

          <Col>
          <SubjectBlock
              slug={"finance"}
              subject_name={"Economic Policy"}
              short_summary={"Economic policy refers to the system which set levels of taxation, government budgets, the money supply, interest rates & more into the economy."}
              image={economyimg}>
            </SubjectBlock>
          </Col>

          <Col>
          <SubjectBlock
              slug={"education"}
              subject_name={"Education"}
              short_summary={"Education policy consists of the principles & policies of the educational sphere & the collection of laws that govern the operation of education systems."}
              image={educationimg}>
            </SubjectBlock>
          </Col>
        </Row>

        <Row className={styles.rows}>
          <Col>
            <SubjectBlock
              slug={"terrorism"}
              subject_name={"National Security"}
              short_summary="National security is the security of a nation state, including its citizens, economy, & institutions, which is regarded as a duty of government."
              image={nsimg}>
            </SubjectBlock>
          </Col>

          <Col>
            <SubjectBlock
              slug={"violence"}
              subject_name={"Criminal Justice"}
              short_summary={"The criminal justice system is the set of agencies & processes established by governments to control crime & impose penalties on those who violate laws."}
              image={cjimg}>
            </SubjectBlock>
          </Col>

          <Col>
            <SubjectBlock
              slug={"marriage"}
              subject_name={"LGBTQ+ Rights"}
              short_summary={"LGBTQ+ advocates have overcome enormous challenges & risks to their own personal safety to fight discrimination & demand equal rights."}
              image={lgbtqimg}>
            </SubjectBlock>
          </Col>
        </Row>

      </Container>

    </div>
  )
}
