import React, {useEffect, useState} from 'react';
import styles from './AllPoliticians.scss';
import PoliticianBlock from './PoliticianBlock';
import jsonData from '../../../../mock_data/politicians.json'; // TODO CLEANUP


export default function AllPoliticians() {
  const[politicianData, setPoliticianData] = useState(null)
  useEffect(function() {
    if (!politicianData) {
      fetch('/')
        .then(response => {
          if(!response.ok) {
            return Promise.reject(data);
          }
          return jsonData;
        })
        .then(data => {
          setPoliticianData(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  })
  return (
    <div className={styles.main}>
      <h2>Politicians</h2>

      <PoliticianBlock
        first_name={politicianData ? politicianData.first_name : null}
        middle_name={politicianData ? politicianData.middle_name : null}
        last_name={politicianData ? politicianData.last_name : null}
        title={politicianData ? politicianData.title : null}
        party={politicianData ? politicianData.party : null}>
      </PoliticianBlock>

    </div>
  )
}
