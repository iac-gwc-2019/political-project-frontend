import React from 'react';
import styles from './PoliticianStyle.scss';
import picture from '../../assets/personicon.png'

export default function Picture({picture}) {

  return (
    <div className={styles.politicianImage}>
      <img src={picture} width= "150px" height="150px"/>
    </div>
  )
}
