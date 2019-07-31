import React from 'react';
import styles from './AllBills.scss';

export default function BillBlock() {

  return (
    <div>
      <div className={styles.infoBlock}>
        <img src='http://www.pngmart.com/files/7/Bill-Transparent-PNG.png' width='70px' height='70px'/>
        <h5>Green New Deal</h5>
        <p>Sponsor: AOC</p>
      </div>
      <hr className="grayLine" />
    </div>
  )
}
