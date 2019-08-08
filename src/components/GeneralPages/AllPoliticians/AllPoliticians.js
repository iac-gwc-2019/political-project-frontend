import React, {useEffect, useState} from 'react';
import styles from './AllPoliticians.scss';
import PoliticianBlock from './PoliticianBlock';
import { getPeopleAsync } from '../../../../fetch_data/functions/fetchPeople';

export default function AllPoliticians() {
  const[politicianData, setPoliticianData] = useState(null)
  useEffect(function() {
    if (!politicianData) {
      getPeopleAsync()
        .then(data => {
          setPoliticianData(data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  });


  const allPoliticianBlocks = politicianData ? politicianData.map(politician => {
    return (
      <PoliticianBlock
        first_name={politician.first_name}
        middle_name={politician.middle_name}
        last_name={politician.last_name}
        title={politician.title}
        party={politician.party}
        id={politician.id}>
      </PoliticianBlock>
    );
  }) : null;

  return (
    <div className={styles.main}>
      <h2 className={styles.header}>Politicians</h2>
      <p className={styles.subheader}>Learn more about politicians</p>
      {allPoliticianBlocks}
    </div>
  )
}
