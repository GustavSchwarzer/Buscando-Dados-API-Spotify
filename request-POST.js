const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const url = 'https://psel-solution-automation-cf-ubqz773kaq-uc.a.run.app?access_token=UcAxu7xAh02D';

const data = {
    github_url: '<https://github.com/GustavSchwarzer/Buscando-Dados-API-Spotify>',
    name: '<Gustav Schwarzer>',
    follower_ranking: [
        {
            artist_name: '<Ariana Grande>',
            followers: '<88946181>',
        },
        {
            artist_name: '<Justin Bieber>',
            followers: '<70811243>',
        },
        {
            artist_name: '<Taylor Swift>',
            followers: '<70523564>',
        },
        {
            artist_name: '<Eminem>',
            followers: '<67957864>',
        },
        {
            artist_name: '<Rihanna>',
            followers: '<53953951>',
        },
        {
            artist_name: '<Bruno Mars>',
            followers: '<47150039>',
        },
        {
            artist_name: '<Imagine Dragons>',
            followers: '<46576682>',
        },
    ],
    popularity_ranking: [
        {
            artist_name: '<Taylor Swift>',
            popularity: '<100>',
        },
        {
            artist_name: '<Eminem>',
            popularity: '<93>',
        },
        {
            artist_name: '<Rihanna>',
            popularity: '<93>',
        },
        {
            artist_name: '<Shakira>',
            popularity: '<93>',
        },
        {
            artist_name: '<Ariana Grande>',
            popularity: '<92>',
        },
    ],
};

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));