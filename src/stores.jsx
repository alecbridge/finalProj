// npm install --save @horizon/client
import Horizon from '@horizon/client';

let port;
let secure;
if (process.env.NODE_ENV === 'production') {
  port = 443;
  secure = true;
} else {
  port = 3001;
  secure = false;
}

const host = window.location.hostname + ':' + port;
// Create an instance of Horizon, passing a config object
const horizon = Horizon({
  secure: secure,
  host: host
});

// Any number of stores that you like
const champions = horizon('champions');
const stars = horizon('stars');
export {champions, stars};
