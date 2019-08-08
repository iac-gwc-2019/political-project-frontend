import {getPeopleById} from './fetchPoliticans';

const fetch = require('node-fetch');

export function getBillById(id){
   return fetch('https://politigo-backend.herokuapp.com/', {
   method: 'POST',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify({ query: `{
      billById(id: "${id}"){
         bill_name
         primary_subject
         bill_id
         summary
         summary_short
         latest_major_action_date
         latest_major_action
         billSlug
         sponsorId
      }
   }`}),
   })
   .then(res => res.json())
   .then(res => {
     console.log(res)
     if(res.errors) {
       return Promise.reject(new Error('Bill does not exist'))
     }
     let bill = {...res.data.billById};
     console.log(bill);
     return getPeopleById(bill.sponsorId)
        .then(sponsor => {
          bill.sponsor = sponsor;
          delete bill.sponsorId;
          return bill
        });
   });
}

export function getBillsBySubject(subject){
   return fetch('https://politigo-backend.herokuapp.com/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `{
         billsBySubject(primary_subject: "${subject}"){
            bill_name
            primary_subject
            bill_id
            summary
            summary_short
            latest_major_action_date
            latest_major_action
            billSlug
            sponsorId
         }
      }`}),
   })
   .then(res => res.json())
   .then(res => {
      if (res.errors) {
        return Promise.reject(new Error('Subject doesn\'t exist.'))
      }
      return res.data.billsBySubject;
   });
}

export function getBillsCosponsoredBy(sponsorId){
   return fetch('https://politigo-backend.herokuapp.com/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `{
         billsCosponsoredBy(sponsorId: "${sponsorId}"){
           bill_name
           primary_subject
           bill_id
           summary
           summary_short
           latest_major_action_date
           latest_major_action
           billSlug
           sponsorId
         }
      }` }),
   })
   .then(res => res.json())
   .then(res => {
      console.log(res.data.billsCosponsoredBy);
      return res.data.billsCosponsoredBy;
   });
}
