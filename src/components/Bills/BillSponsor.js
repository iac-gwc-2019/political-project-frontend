import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BillStyle.scss';

export default function BillSponsor({sponsor_name, sponsor_party, website, phone}) {
  return (
    <div>
      <Link to="/politician" className={styles.link}><div className={styles.sponsorBlock}>
        <img className={styles.img} src="https://img.icons8.com/cotton/2x/person-male.png" height='50px'/>
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
