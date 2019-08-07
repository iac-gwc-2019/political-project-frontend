const fetch = require('node-fetch');

export function getBillById(id){
   return fetch('http://localhost:4000/', {
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
   console.log(res.data.billById);
   return res.data.billById;
   });
}

export function getBillsBySubject(subject){
   return fetch('http://localhost:4000/', {
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
      console.log(res.data.billsBySubject);
      return res.data.billsBySubject;
   });
}

export function getBillsCosponsoredBy(sponsorId){
   return fetch('http://localhost:4000/', {
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