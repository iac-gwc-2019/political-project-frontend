import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PoliticianStyle.scss';

export default function BillsBlock() {
  return (
    <div>
      <Link to="/bills" className={styles.link}><div className={styles.infoBlock}>
        <img className={styles.img} src='http://icons.iconarchive.com/icons/icons8/windows-8/256/Ecommerce-Bill-icon.png'width='50px' height='50px'/>
        <h5>Bill Name</h5>
        <p>Description of Bill</p>
        </div>
      </Link>
    </div>
  )
}
