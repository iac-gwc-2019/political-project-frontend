import React from 'react';
import styles from './BillStyle.scss';

export default function BillSponsor({sponsor_name, sponsor_party, website, phone}) {
  return (
    <div>
      <div className={styles.sponsorBlock}>
        <img src='https://pbs.twimg.com/profile_images/923274881197895680/AbHcStkl.jpg'/>
        <div>
          <div className={styles.sponsor}>
            <h5>Sponsor Person: {sponsor_name}</h5>

            <div className={styles.contactInfo}>
              <p>Political Party: {(sponsor_party==="D") ? "Democratic" : "Republican"}</p>
              <p>Website: {website}</p>
              <p>Phone: {phone}</p>
            </div>

          </div>
        </div>

      </div>
    </div>

  )

}
