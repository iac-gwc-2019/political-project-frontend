import React, {useEffect, useState} from 'react';
import Title from './Title.js';
import PoliticianInfo from './PoliticianInformation.js';
import Picture from './Picture.js';
import Summary from './Summary.js';
import BillsBlock from './BillsBlock.js';
import styles from './PoliticianStyle.scss';
import jsonData from '../../../mock_data/politicians.json'; // TODO CLEANUP
export default function Politicians() {
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
    <div className={styles.background}>
      <div className={styles.main}>
        <div className={styles.imageAndInfo}>
          <div className={styles.image}>
            <Picture
              picture={politicianData ? politicianData.picture : null}>
            </Picture>
          </div>

          <div className={styles.info}>
            <Title
              short_title={politicianData ? politicianData.short_title : null}
              first_name={politicianData ? politicianData.first_name : null}
              middle_name={politicianData ? politicianData.middle_name : null}
              last_name={politicianData ? politicianData.last_name : null}>
            </Title>
            <PoliticianInfo
              website={politicianData ? politicianData.website : null}
              phone={politicianData ? politicianData.phone : null}
              party={politicianData ? politicianData.party : null}>
            </PoliticianInfo>
          </div>

        </div>

        <div>
          <Summary
            summary={politicianData ? politicianData.summary : null}>
          </Summary>
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
