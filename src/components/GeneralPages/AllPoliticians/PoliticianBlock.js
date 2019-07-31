import React from 'react';
import styles from './AllPoliticians.scss';

export default function PoliticanBlock() {

  return (
    <div>
      <div className={styles.infoBlock}>
        <img src='https://pbs.twimg.com/profile_images/923274881197895680/AbHcStkl.jpg' width='70px' height='70px'/>
        <h5>AOC</h5>
        <p>Political Party: Democratic</p>
        <p>U.S. Representative</p>
      </div>
      <hr className="grayLine" />
    </div>
  )
}
