import React from 'react';
import styles from './BillStyle.scss';
import BillInfo from './BillInfo';
import BillSponsor from './BillSponsor';
import Picture from './Picture';
import Recents from './Recents'
import Summary from './Summary';
import Navigation from '../Navigation/Navigation';


export default function Bills() {

  return (
    <div>
      <Navigation />
      <div className={styles.main}>
        <div className={styles.infoAndPicture}>
          <Picture></Picture>
          <BillInfo></BillInfo>
        </div>

        <Summary></Summary>
        <Recents></Recents>
        <BillSponsor></BillSponsor>
      </div>
    </div>
  );
}
