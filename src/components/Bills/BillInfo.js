import React from 'react';
import styles from './BillStyle.scss';

<<<<<<< HEAD
export default function BillInfo({bill_name, primary_subject, bill_id}) {

  return (
    <div className={styles.billInfo}>
      <h3>{bill_name}</h3>
      <p>{primary_subject}</p>
      <p>ID Number: {bill_id}</p>
=======
<<<<<<< HEAD
export default function BillInfo() {

  return (
    <div className={styles.billInfo}>
      <h3>Green New Deal</h3>
=======
export default function BillInfo({name}) {

  return (
    <div className={styles.billInfo}>
      <h3>{name}</h3>
>>>>>>> 5bf01b5... integrated app with react bootstrap for prettier
      <p>Environmental Sustainabiliy</p>
      <p>ID Number: 12345678</p>
>>>>>>> integrated app with react bootstrap for prettier
    </div>
  )
}
