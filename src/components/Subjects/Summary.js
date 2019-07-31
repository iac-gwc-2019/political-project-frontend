import React from 'react';
import styles from './SubjectStyle.scss';

export default function Summary({description}) {

  return (
    <div className={styles.about}>
      <h4>About</h4>
      <p>{description}</p>
    </div>
  )
}
