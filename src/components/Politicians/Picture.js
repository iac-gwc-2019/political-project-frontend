import React from 'react';
import styles from './PoliticianStyle.scss';
import picture from '../../assets/personicon.png'

export default function Picture() {

  return (
    <div className={styles.politicianImage}>
      <img src="https://img.icons8.com/cotton/2x/person-male.png" width= "150px" height="150px"/>
    </div>
  )
}
