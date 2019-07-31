import React from 'react';
import styles from './BillStyle.scss';

export default function BillInfo({name}) {

  return (
    <div className={styles.billInfo}>
      <h3>{name}</h3>
      <p>Environmental Sustainabiliy</p>
      <p>ID Number: 12345678</p>
    </div>
  )
}
