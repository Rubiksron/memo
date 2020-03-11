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
client.on('err: ', err => console.error('ya done goofed', err));

//Set view enginge for server-side templating
app.set('view engine', 'ejs');

//Static Routes
app.use(express.static('public'));

//Application Middleware
app.use(express.urlencoded({ extended:true }));

//Routes
app.get('/', getMemos);
app.post('/createMemo', createMemo);
app.post('/delete', deleteMemo);
app.get('*', (request, response) => response.status(404).send('This Route Does Not Exist, What Are You Doing With Your Life?'));

//Helper Functions
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

  let SQL = 'SELECT * FROM memos;';

  return client.query(SQL)
    .then(results => {
      console.log('results.rows getMemos: ', results.rows);
      response.render('./index', { memos: results.rows});
    })
    .catch(err => console.log('ya done goofed: ', err));
}

function deleteMemo(request, response) {
  console.log('delete !!');
  console.log('response==============+++++++++++++++:', response);
  console.log('request.body: ', request.body);
  console.log('request.params: ', request.params);
  console.log('request.query : ', request.query);
  response.redirect('/');
  // const SQL = `DELETE FROM memos WHERE id=${id}`;
  // const VALUES = [id]
  // client.query(SQL, VALUES)
  //   .then(results => {
  //     console.log('results.rows deleteMemo: ', results.rows);
  //   })
  //   .catch(err => console.log('ya done goofed: ', err));
}

client.connect()
  .then(() => {
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
  });


