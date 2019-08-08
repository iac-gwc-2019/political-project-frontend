import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PoliticianStyle.scss';

export default function BillsBlock() {
  return (
    <div>
      <Link to="/bills" className={styles.link}><div className={styles.infoBlock}>
        <img className={styles.img} src='https://www.focusdc.org/sites/focusdc.org/files/styles/timeline_item/public/bill%20icon%20480_0.png?itok=gnNECIMn'width='50px' height='50px'/>
        <h5>Bill Name</h5>
        <p>Description of Bill</p>
        </div>
      </Link>
    </div>
  )
}
