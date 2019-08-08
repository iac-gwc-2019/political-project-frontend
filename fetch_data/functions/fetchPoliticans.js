import {getBillsCosponsoredBy} from './fetchBills';

const fetch = require('node-fetch');

export function getPeopleById(id){
   return fetch('https://politigo-backend.herokuapp.com/', {
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
     if(res.errors) {
      return Promise.reject(new Error('Bill does not exist'))
    }
    let person = {...res.data.personById};
    return getBillsCosponsoredBy(person.id)
       .then(bills => {
         person.bills = bills;
         return person
       });
    });
}


//return res.data.personById;