import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BillStyle.scss';

export default function BillSponsor({sponsor_picture, sponsor_name, sponsor_party, website, phone}) {
  return (
    <div>
      <Link to="/politicians" className={styles.link}><div className={styles.sponsorBlock}>
        <img src={sponsor_picture}/>
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
      </Link>
    </div>

  )

}
