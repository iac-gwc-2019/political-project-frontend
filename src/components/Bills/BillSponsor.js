import React from 'react';
import styles from './BillStyle.scss';

export default function BillSponsor() {
  return (
    <div>
      <div className={styles.sponsorBlock}>
        <img src='https://pbs.twimg.com/profile_images/923274881197895680/AbHcStkl.jpg' class="img-responsive" />
        <div>
          <div className={styles.sponsor}>
            <h5>Sponsor Person: Alexandria Ocasio Cortez</h5>
        
            <div className={styles.contactInfo}>
              <p>Email: aoc@gmail.com</p>
              <p>Number: 510-278-3289</p>
              <p>Political Party: Democratic</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  )

}
