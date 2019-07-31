import React, {useEffect, useState} from 'react';
import styles from './BillStyle.scss';
import BillInfo from './BillInfo';
import BillSponsor from './BillSponsor';
import Picture from './Picture';
import Recents from './Recents'
import Summary from './Summary';
import jsonData from '../../../mock_data/bills.json'; // TODO CLEANUP

export default function Bills() {
  const[billData, setBillData] = useState(null)
  useEffect(function() {
    if (!billData) {
      fetch('/')
        .then(response => {
          if(!response.ok) {
            return Promise.reject(data);
          }
          return jsonData;
        })
        .then(data => {
          setBillData(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  })

  return (
    <div className={styles.background}>
      <div className={styles.main}>
        <div className={styles.infoAndPicture}>
          <Picture></Picture>
          <BillInfo
              bill_name={billData ? billData.bill_name : 'default name'}
              primary_subject={billData ? billData.primary_subject : 'default name'}
              bill_id={billData ? billData.bill_id : 'default name'}>
          </BillInfo>
        </div>

        <Summary
          summary={billData ? billData.summary : 'default name'}>
        </Summary>

        <Recents
          latest_major_action_date={billData ? billData.latest_major_action_date : 'default name'}
          latest_major_action={billData ? billData.latest_major_action : 'default name'}>
        </Recents>

        <BillSponsor
          sponsor_name={billData ? billData.sponsor_name : 'default name'}
          sponsor_party={billData ? billData.sponsor_party : 'default name'}
          website={billData ? billData.website : 'default name'}
          phone={billData ? billData.phone : 'default name'}>
        </BillSponsor>
      </div>
    </div>
  );
}
