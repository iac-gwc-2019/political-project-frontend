import React from 'react';
import styles from './PoliticianStyle.scss'
export default function Title({short_title, first_name, middle_name, last_name}) {

  return (
    <div>
      <h3 className={styles.title}>{short_title} {first_name} {middle_name} {last_name}</h3>
    </div>
  )
}
