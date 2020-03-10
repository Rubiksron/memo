'use strict';

require('dotenv').config();

//Application Dependencies
const express = require('express');
const pg = require('pg')

//Application Setup
const app = express();
const PORT = process.env.PORT || 3001;

//Database Setup
const client = new pg.Client(process.env.DATABASE_URL);

client.on('error', err => console.error('ya done goofed', err));

//Application Middleware
app.use(express.urlencoded({ extended:true }));

//Static Routes
app.use(express.static('public'));

//Routes
app.get('/days', (request, response) => {
  response.send('The days grow longer');
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
