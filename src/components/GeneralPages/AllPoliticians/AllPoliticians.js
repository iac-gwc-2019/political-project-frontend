import React from 'react';
import styles from './AllPoliticians.scss';
import PoliticianBlock from './PoliticianBlock';

export default function AllPoliticians() {
  return (
    <div className={styles.main}>
      <h2>Politicians</h2>

      <PoliticianBlock></PoliticianBlock>
      <PoliticianBlock></PoliticianBlock>
      <PoliticianBlock></PoliticianBlock>
      <PoliticianBlock></PoliticianBlock>
      <PoliticianBlock></PoliticianBlock>
    </div>
  )
}
