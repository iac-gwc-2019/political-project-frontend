const fetch = require('node-fetch');

async function getPeopleAsync() {
    const response = await fetch('http://localhost:4000/', {
        body: JSON.stringify({ query: `{
        peopleHouse {
        short_title
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
        });
    const data = await response.json()
    const peopleHouse = data.data.peopleHouse;

    const response2 = await fetch('http://localhost:4000/', {
        body: JSON.stringify({ query: `{
        peopleSenate {
        short_title
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
        });
    const data2 = await response2.json()
    const peopleSenate = data2.data.peopleSenate;
    
    const people = [].concat(peopleSenate, peopleHouse);
    return people;
}

module.exports.getPeopleAsync = getPeopleAsync;