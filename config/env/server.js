// Path: ./config/env/production/server.js`

module.exports = ({ env }) => ({
  url: env('https://totaltheatre.herokuapp.com/'),
});