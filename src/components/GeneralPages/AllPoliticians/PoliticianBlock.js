import React from 'react';
import {Link} from 'react-router-dom'
import styles from './AllPoliticians.scss';

export default function PoliticanBlock({first_name, middle_name, last_name, title, party, picture}) {

  return (
    <div>
      <div className={styles.infoBlock}>
        <div className={styles.politicianImg}>
          <img src={picture} width='70px' height='70px'/>
        </div>
        <Link to='/alexanderlamar'><h5>{first_name} {middle_name} {last_name}</h5></Link>
        <p>Title: {title}</p>
        <p>Political Party: {party}</p>
      </div>
      <hr className="grayLine" />
    </div>
  )
}
