import React, {useEffect, useState} from 'react';
import styles from './BillStyle.scss';
import BillInfo from './BillInfo';
import BillSponsor from './BillSponsor';
import Picture from './Picture';
import Recents from './Recents'
import Summary from './Summary';

export default function Bills({match}) {
  const[billData, setBillData] = useState(null)
  useEffect(function() {
    if(!billData){
      fetch('https://pokeapi.co/api/v2/pokemon/' + match.params.pokemonName)
      .then(function(data) {
        if(!data.ok) return Promise.reject(data);

        return data.json();
        // return {
        //   name: 'jfdlska'
        // }
      })
      .then(data => {
        setBillData(data)
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  } )


  return (
    <div>
      <div className={styles.main}>
        <div className={styles.infoAndPicture}>
          <Picture></Picture>
          <BillInfo name={billData ? billData.name : 'default name'}></BillInfo>
        </div>

        <Summary></Summary>
        <Recents></Recents>
        <BillSponsor></BillSponsor>
      </div>
    </div>
  );
}
