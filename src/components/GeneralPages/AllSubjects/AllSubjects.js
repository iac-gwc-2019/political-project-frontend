import React from 'react';
import styles from './AllSubjects.scss';
import SubjectBlock from './SubjectBlock';

export default function AllSubjects() {
  return (
    <div className={styles.main}>
      <h2>Subjects</h2>

      <SubjectBlock></SubjectBlock>
      <SubjectBlock></SubjectBlock>
      <SubjectBlock></SubjectBlock>
      <SubjectBlock></SubjectBlock>
      <SubjectBlock></SubjectBlock>

    </div>
  )
}
