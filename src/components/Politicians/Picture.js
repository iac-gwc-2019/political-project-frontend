import React from 'react';
import styles from './PoliticianStyle.scss';


export default function Picture({picture}) {

  return (
    <div className={styles.politicianImage}>
      <img src={picture} width= "150px" height="150px"/>
    </div>
  )
}
