import React, {useEffect, useState} from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import styles from './AllSubjects.scss';
import SubjectBlock from './SubjectBlock';
import jsonData from '../../../../mock_data/subjects.json'; // TODO CLEANUP


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
      <h2>Subjects</h2>
      <p>Search for bills by subject</p>
      <Container>
        <Row className={styles.rows}>
          <Col>
            <SubjectBlock
              subject_name={subjectData ? subjectData.subject_name : null}
              short_summary={subjectData ? subjectData.short_summary : null}>
            </SubjectBlock>
          </Col>

          <Col>
            <SubjectBlock
              subject_name={subjectData ? subjectData.subject_name : null}
              short_summary={subjectData ? subjectData.short_summary : null}>
            </SubjectBlock>
          </Col>

          <Col>
            <SubjectBlock
              subject_name={subjectData ? subjectData.subject_name : null}
              short_summary={subjectData ? subjectData.short_summary : null}>
            </SubjectBlock>
          </Col>
        </Row>

        <Row className={styles.rows}>
          <Col>
            <SubjectBlock
              subject_name={subjectData ? subjectData.subject_name : null}
              short_summary={subjectData ? subjectData.short_summary : null}>
            </SubjectBlock>
          </Col>

          <Col>
            <SubjectBlock
              subject_name={subjectData ? subjectData.subject_name : null}
              short_summary={subjectData ? subjectData.short_summary : null}>
            </SubjectBlock>
          </Col>

          <Col>
            <SubjectBlock
              subject_name={subjectData ? subjectData.subject_name : null}
              short_summary={subjectData ? subjectData.short_summary : null}>
            </SubjectBlock>
          </Col>
        </Row>

        <Row className={styles.rows}>
          <Col>
            <SubjectBlock
              subject_name={subjectData ? subjectData.subject_name : null}
              short_summary={subjectData ? subjectData.short_summary : null}>
            </SubjectBlock>
          </Col>

          <Col>
            <SubjectBlock
              subject_name={subjectData ? subjectData.subject_name : null}
              short_summary={subjectData ? subjectData.short_summary : null}>
            </SubjectBlock>
          </Col>

          <Col>
            <SubjectBlock
              subject_name={subjectData ? subjectData.subject_name : null}
              short_summary={subjectData ? subjectData.short_summary : null}>
            </SubjectBlock>
          </Col>
        </Row>

        <Row className={styles.rows}>
          <Col>
            <SubjectBlock
              subject_name={subjectData ? subjectData.subject_name : null}
              short_summary={subjectData ? subjectData.short_summary : null}>
            </SubjectBlock>
          </Col>

          <Col>
            <SubjectBlock
              subject_name={subjectData ? subjectData.subject_name : null}
              short_summary={subjectData ? subjectData.short_summary : null}>
            </SubjectBlock>
          </Col>

          <Col>
            <SubjectBlock
              subject_name={subjectData ? subjectData.subject_name : null}
              short_summary={subjectData ? subjectData.short_summary : null}>
            </SubjectBlock>
          </Col>
        </Row>

      </Container>

    </div>
  )
}
