import React from 'react';
import styles from './BillStyle.scss';

export default function BillInfo({bill_name, primary_subject, bill_id}) {

  return (
    <div className={styles.billInfo}>
      <h3>{bill_name}</h3>
      <p>{primary_subject}</p>
      <p>ID Number: {bill_id}</p>
    </div>
  )
}
