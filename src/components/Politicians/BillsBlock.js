import React from 'react';
import styles from './PoliticianStyle.scss';

export default function BillsBlock() {

  return (
    <div>
      <div className={styles.infoBlock}>
        <img src='http://icons.iconarchive.com/icons/icons8/windows-8/256/Ecommerce-Bill-icon.png' width='50px' height='50px'/>
        <h5>Bill Name</h5>
        <p>Description of Bill</p>
      </div>
    </div>
  )
}
