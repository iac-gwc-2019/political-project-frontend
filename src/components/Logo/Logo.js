import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Logo.scss';
import img from '../../assets/pictures/logo.png'

export default function Logo() {
  return (
    <span>
      <Link to="/"><img src={img} width="240px" height="80px" className={styles.logo}/></Link>
    </span>
  )
}
