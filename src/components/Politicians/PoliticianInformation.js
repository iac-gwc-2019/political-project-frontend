import React from 'react';

export default function PoliticianInfo({website, phone, party}) {

  return (
    <div>
      <p>Website: {website}</p>
      <p>Phone: {phone}</p>
      <p>Political Party: {(party==="D") ? "Democratic" : "Republican"}</p>
    </div>
  )
}
