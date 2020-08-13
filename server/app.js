const express = require('express'),
  path = require('path'),
  app = express();

//Middleware
app.use(express.json());

// Serve cra build files
if (process.env.NODE_ENV === 'production')
  app.use(express.static(path.join(__dirname, '../client/build')));
// Any authentication middleware and related routing would be here.

// Handle React routing, return all requests to React app
if (process.env.NODE_ENV === 'production')
  app.get('*', (request, response) =>
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'))
  );

module.exports = app;
