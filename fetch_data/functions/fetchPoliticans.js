import {getBillsCosponsoredBy} from './fetchBills';

const fetch = require('node-fetch');

export function getPeopleById(id){
   return fetch('http://localhost:4000/', {
   body: JSON.stringify({ query: `{
      personById(memberId: "${id}"){
        short_title
        title
        first_name
        last_name
        party
        state
        website
        phone
        twitter_account
        id
      }
    }` }),
   method: 'POST',
   headers: { 'Content-Type': 'application/json' },
   })
   .then(res => res.json())
   .then(res => {
     console.log(res)
     if(res.errors) {
      return Promise.reject(new Error('Bill does not exist'))
    }
    let person = {...res.data.personById};
    console.log(person);
    return getBillsCosponsoredBy(person.id)
       .then(bills => {
         person.bills = bills;
         return person
       });
    });
}


//return res.data.personById;