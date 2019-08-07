import React from 'react';
import styles from './BillStyle.scss';
import { Link } from 'react-router-dom';

export default function BillSponsor({sponsor_name, sponsor_party, website, phone}) {
  return (
    <div>
      <Link to="/politician" className={styles.link}><div className={styles.sponsorBlock}>
        <img className={styles.img} src='https://pbs.twimg.com/profile_images/923274881197895680/AbHcStkl.jpg'width='50px' height='50px'/>
        <h5>{sponsor_name}</h5>
        <div className={styles.contactInfo}>
          <p>Political Party: {(sponsor_party==="D") ? "Democratic" : "Republican"}</p>
          <p>Website: {website}</p>
          <p>Phone: {phone}</p>
        </div>
      </div>
      </Link>
    </div>

  )

}
