import React from 'react';
import {Link} from 'react-router-dom'
import styles from './AllPoliticians.scss';
import picture from '../../../assets/personicon.png'

export default function PoliticanBlock({first_name, middle_name, last_name, title, party, id}) {

  function partyFullName({party}) {
    switch(party) {
      case 'D':
        return "Democratic";
      case 'R':
        return "Republican";
      case 'I':
        return "Independent";
      default:
        return null;
    }
  }

  return (
    <div>
      <div className={styles.infoBlock}>
        <div className={styles.politicianImg}>
          <img src="https://img.icons8.com/cotton/2x/person-male.png" width='70px' height='70px'/>
        </div>
        <Link to={`/politicians/${id}`}><h5>{first_name} {middle_name} {last_name}</h5></Link>
        <p>Title: {title}</p>
        <p>Affiliated Party: {partyFullName({party})}</p>
      </div>
      <hr className="grayLine" />
    </div>
  )
}
