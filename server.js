'use strict';

require('dotenv').config();

//Application Dependencies
const express = require('express');
const pg = require('pg');
const methodOverride = require('method-override');

//Application Setup
const app = express();
const PORT = process.env.PORT || 3001;

//Database Setup
const client = new pg.Client(process.env.DATABASE_URL);
client.on('err: ', err => console.error('ya done goofed', err));

//Set view enginge for server-side templating
app.set('view engine', 'ejs');

//Static Routes
app.use(express.static('public'));

//Application Middleware
app.use(express.urlencoded({ extended:true }));
app.use(methodOverride('_method'));

//Routes
app.get('/', getMemos);
app.get('/hamburger', hamburger);
app.post('/createMemo', createMemo);
app.delete('/delete/:id', deleteMemo);
app.get('*', (request, response) => response.status(404).send('This Route Does Not Exist'));

//Helper Functions
function hamburger(request, response) {
  response.render('./pages/links');
}


function createMemo(request, response) {
  let memo = request.body.memo;
  
  const value = memo;
  const SQL =   'INSERT INTO memos(memo) VALUES($1) RETURNING id;';
  let VALUES = [value];

  client.query(SQL, VALUES)
    .then(() => response.redirect('/'))
    .catch(err => console.log('ya done goofed: ',err));
}


function getMemos(request, response) {
  let SQL = 'SELECT * FROM memos ORDER BY id DESC;';

  client.query(SQL)
    .then(results => {
      // console.log('results.rows getMemos: ', results.rows);
      response.render('./index', { memos: results.rows});
    })
    .catch(err => console.log('ya done goofed: ', err));
}


function deleteMemo(request, response) {
  let id = request.params.id;

  const SQL = 'DELETE FROM memos WHERE id=$1;';
  const VALUES = [id];

  client.query(SQL, VALUES)
    .then(() => response.redirect('/'))
    .catch(err => console.log('ya done goofed: ', err));
}


client.connect()
  .then(() => {
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
  });


