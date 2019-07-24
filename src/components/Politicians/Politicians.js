import React from 'react';
import Title from './Title.js';
import PoliticianInfo from './PoliticianInformation.js';
import Picture from './Picture.js';
import Summary from './Summary.js';
import BillsBlock from './BillsBlock.js';
import styles from './PoliticianStyle.scss';
import Navigation from '../Navigation/Navigation';

export default function Politicians() {

  return (
    <div>
      <Navigation />
      <div className={styles.main}>
        <div className={styles.imageAndInfo}>
          <div className={styles.image}>
            <Picture></Picture>
          </div>

          <Title></Title>
          <PoliticianInfo></PoliticianInfo>
        </div>

        <div>
          <Summary></Summary>
        </div>

        <div>
          <h4>Bills</h4>
          <BillsBlock></BillsBlock>
          <BillsBlock></BillsBlock>
          <BillsBlock></BillsBlock>
        </div>

      </div>
    </div>
  );
}
