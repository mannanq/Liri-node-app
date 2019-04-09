Liri Bot!

LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

User can find out the spotify details of a song, venue location/time/date of a concert, OMDB movie details of a movie.

Example usage:

- To find the venue location of 'Queen Latifah', type in 'node liri.js concert-this queen latifah' in the terminal. Response will fetch the venue location, date and location.
- To find the details of a song "All the Small things", type 'node liri.js spotify-this-song All The Small Things' in the terminal. Response will fetch the artists information, spotify url and song album.
- To find the details of a movie "Captian Marvel", type 'node liri.js movie-this Captain Marvel' in the terminal. Response will fetch the details of the requested movie.

Required node modules:

- axios
- dotenv
- moment
- node-spotify-api

Simply type in 'node install' in your terminal. That will install all the required node modules.

You would also need a spotify client id and secret key. Steps involved to get them:
Step One: Visit <https://developer.spotify.com/my-applications/#!/>

- Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

- Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

- Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).

Once you get your keys, simply create a '.env' file. In it type this:

SPOTIFY_ID=Your_Client_id
SPOTIFY_SECRET=Your_secret_id

- Important: No quotes around the client id or secret key. And no space after the equal sign!

ask away the liri bot!
