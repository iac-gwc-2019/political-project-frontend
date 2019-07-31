import React from 'react';
import Title from './Title.js';
import Picture from './Picture.js';
import Summary from './Summary.js';
import BillsBlock from './BillsBlock.js';
import styles from './SubjectStyle.scss';

export default function Subjects() {

  return (
    
    <div>
      <div className={styles.main}>
        <div className={styles.imageAndInfo}>
          <div className={styles.image}>
            <Picture></Picture>
          </div>
          <Title></Title>
        </div>

        <Summary></Summary>

        <h4>Bills</h4>
        <BillsBlock></BillsBlock>
        <BillsBlock></BillsBlock>
        <BillsBlock></BillsBlock>

      </div>
    </div>
  );
}
