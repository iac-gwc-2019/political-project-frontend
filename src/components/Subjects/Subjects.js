import React, {useEffect, useState} from 'react';
import Title from './Title.js';
import Picture from './Picture.js';
import Summary from './Summary.js';
import BillsBlock from './BillsBlock.js';
import styles from './SubjectStyle.scss';
import jsonData from '../../../mock_data/subjects.json'; // TODO CLEANUP
export default function Subjects() {
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
      <div className={styles.background}>
      <div className={styles.main}>
        <div className={styles.imageAndInfo}>
          <div className={styles.image}>
            <Picture></Picture>
          </div>
          <Title
            subject_name={subjectData ? subjectData.subject_name : null}>
          </Title>
        </div>

        <Summary
          description={subjectData ? subjectData.description : null}>
        </Summary>

        <h4>Bills</h4>
        <BillsBlock></BillsBlock>
        <BillsBlock></BillsBlock>
        <BillsBlock></BillsBlock>

      </div>
    </div>
  );
}
