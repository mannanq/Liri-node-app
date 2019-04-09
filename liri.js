require('dotenv').config();

var keys = require('./keys.js');
var axios = require('axios');
var Spotify = require('node-spotify-api');
var moment = require('moment');
var spotify = new Spotify(keys.spotify);

var nodeArg = process.argv;

switch (nodeArg[2]) {
  case 'concert-this':
    concertFinder();
    break;
  case 'spotify-this-song':
    songInfo();
    break;
  case 'movie-this':
    movieThis();
    break;
}

function concertFinder() {
  var queryString = '';
  var i = 3;
  do {
    queryString += '%20' + nodeArg[i];
    i++;
  } while (i < nodeArg.length);

  queryString = queryString.slice(3);
  console.log(queryString);

  var queryUrl = `https://rest.bandsintown.com/artists/${queryString}/events?app_id=codingbootcamp`;

  axios
    .get(queryUrl)
    .then(res => {
      console.log(`Venue name: ${res.data[0].venue.name}`);
      console.log(
        `Venue location:${res.data[0].venue.city} ${res.data[0].venue.region}`
      );
      console.log(
        `Concert date and time: ${moment(res.data[0].datetime).format(
          'dddd MM/DD/YYYY hh:mm a'
        )}`
      );
    })
    .catch(err => {
      console.log(err);
    });
}

function songInfo() {
  //console.log(nodeArg[3]);
  // construct the string:
  var queryString, types;

  if (nodeArg[3]) {
    queryString = '';
    for (var i = 3; i < nodeArg.length; i++) {
      queryString += ' ' + nodeArg[i];
    }
    queryString = queryString.slice(1);
    types = 'track';
  } else {
    queryString = 'The Sign';
    types = 'track';
  }
  console.log(queryString);

  spotify.search({ type: types, query: queryString, limit: 10 }, function(
    err,
    data
  ) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    console.log(`Song name: ${data.tracks.items[0].name}`);
    console.log(`Spotify url: ${data.tracks.items[0].external_urls.spotify}`);
    console.log('************');
    console.log(`Artist name: ${data.tracks.items[0].album.artists[0].name}`);
    console.log(`Album name: ${data.tracks.items[0].album.name}`);
  });
}

function movieThis() {
  var queryString;
  if (nodeArg[3]) {
    queryString = '';
    //build the query
    var i = 3;
    do {
      queryString += ' ' + nodeArg[i];
      i++;
    } while (i < nodeArg.length);
    queryString = queryString.slice(1);
  } else {
    queryString = 'Mr Nobody';
  }

  var queryUrl = `https://www.omdbapi.com/?t=${queryString}&apikey=trilogy`;

  axios
    .get(queryUrl)
    .then(res => {
      console.log(`Title: ${res.data.Title}`);
      console.log(`Movie Released Date: ${res.data.Released}`);
      console.log(`IMDB Rating: ${res.data.imdbRating}`);
      console.log(`Release Country: ${res.data.Country}`);
      console.log(`Languages: ${res.data.Language}`);
      console.log(`Movie Plot: ${res.data.Plot}`);
      console.log(`Movie Actors: ${res.data.Actors}`);
    })
    .catch(err => {
      console.log(err);
    });
}
