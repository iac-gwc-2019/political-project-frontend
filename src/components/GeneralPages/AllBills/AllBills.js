import React from 'react';
import styles from './AllBills.scss';
import BillBlock from './BillBlock';

export default function AllBills() {
  return (
    <div className={styles.main}>
      <h2>Bills</h2>

      <BillBlock></BillBlock>
      <BillBlock></BillBlock>
      <BillBlock></BillBlock>
      <BillBlock></BillBlock>
      <BillBlock></BillBlock>

    </div>
  )
}
