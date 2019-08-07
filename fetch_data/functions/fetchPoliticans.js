//const query = require('../queries/peopleHouse.graphql');
//import senateQuery from '../queries/peopleSenate.graphql';
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
      console.log(res.data.personById);
      return res.data.peopleById;
   });
}

// TODO: export, call these things in the right place