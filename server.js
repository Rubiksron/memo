'use strict';

require('dotenv').config();

//Application Dependencies
const express = require('express');
const pg = require('pg');

//Application Setup
const app = express();
const PORT = process.env.PORT || 3001;

//Database Setup
const client = new pg.Client(process.env.DATABASE_URL);

client.on('error', err => console.error('ya done goofed', err));

//Application Middleware
app.use(express.urlencoded({ extended:true }));

//Set view enginge for server-side templating
app.set('view engine', 'ejs');

//Static Routes
app.use(express.static('public'));

//Routes
app.get('/', getMemos);

app.get('/days', (request, response) => {
  response.send('The days grow longer');
});


//Helper Functions
function getMemos(request, response) {
 
  let SQL = 'SELECT * FROM memos;';

  return client.query(SQL)
    .then(results => {
      console.log('results.rows: ', results.rows);
      response.render('pages/show', { memos: results.rows});
    })
    .catch(err => console.log('ya done goofed: ', err));
}

client.connect()
  .then(() => {
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
  });
