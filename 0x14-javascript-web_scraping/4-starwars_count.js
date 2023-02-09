#!/usr/bin/node
const request = require('request');
const url = 'https://swapi-api.alx-tools.com/api/films';
request(url, (error, request, body) => {
  if (error) console.log(error);
  const characterUrl = 'https://swapi-api.alx-tools.com/api/people/18/';
  const filmList = JSON.parse(body).results.filter((film) => {
    return film.characters.includes(characterUrl);
    // console.log(JSON.parse(body));
  }).length;
  console.log(filmList);
});
