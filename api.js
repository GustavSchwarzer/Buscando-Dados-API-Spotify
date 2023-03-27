const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const fs = require('fs');

const ids = ['1dfeR4HaWDbWqFHLkxsg1d', '66CXWjxzNUsdJxJ2JdwvnR', '04gDigrS5kc9YWfZHwBETP', '53XhwfbYqKCa1cC15pYq2q', '7dGJo4pcD2V6oG8kP0tJRR', '1HY2Jd0NmPuamShAr6KMms', '4gzpq5DPGxSnKTe4SA8HAU', '6vWDO969PvNqNYHIOW5v0m', '0du5cEVh5yTK9QJze8zA0C', '5pKCCKE2ajJHZ9KAiaK11H', '0EmeFodog0BfCgMzAIvKQp', '1uNFoZAHBGtllmzznpCI3s', '6S2OmqARrzebs0tKUEyXyp', '06HL4z0CvFAxyc27GXpf02'];
const token = 'BQCc9AYEx3U4UXifQAIKaFKLazVKpyXfAC2xJR4Wn8zXduM_p2Gb55_FQksq53fFtZCbi4vnMkHF0k6_eqdnl2IOUGImUH-SoRnp6zX3YKw4D6OK7qzvy4e4iq4B2S14BEqqveR8RutZz6DSowlLz13HQj6roZL_D3EBmfudqWkVV32XPc_PnR6rYfCpTuyV4whzeEqplSJLrX7av0PwWOpI1TwOORaA3XMvpDC6quWzCzGtl_fadTQQDYbvDw9OnsdXopcHy0EujKOo38U70jqJuzoR0QNnUrHw1CRj2bIxncyiFLbA6kTIUmkW0g6gegCz1iU-kZTAPr6bGVaLdqE2KdfnGUb_pXMld4liieUQQoE';

async function getArtistsData() {
  const promises = ids.map(async (id) => {
    const response = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = await response.json();

    return data;
  });
  const results = await Promise.all(promises);
  return results;
}

async function writeToFile() {
  const artists = await getArtistsData();
  fs.writeFile('artists.json', JSON.stringify(artists), (err) => {
    if (err) throw err;
    console.log('File saved successfully!');
  });
}

writeToFile();