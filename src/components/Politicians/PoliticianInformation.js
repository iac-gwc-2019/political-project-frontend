import React from 'react';

export default function PoliticianInfo({website, phone, party}) {

  // function partyFullName({party}) {
  //   switch(party) {
  //     case 'D':
  //       return "Democratic";
  //     case 'R':
  //       return "Republican";
  //     case 'I':
  //       return "Independent";
  //     default:
  //       return null;
  //   }
  // }

  return (
    <div>
      <p>Website: {website}</p>
      <p>Phone: {phone}</p>
      <p>Political Party: {party}</p>
    </div>
  )
}
