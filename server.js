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
app.get('/groceries', getGroceries);
app.get('/pharmacy', getPharmacy);
app.get('/hardware', getHardware);
app.post('/createMemo', createMemo);
app.delete('/delete/:id', deleteMemo);
app.get('*', (request, response) => response.status(404).send('This Route Does Not Exist'));

//Helper Functions
function getHardware(request, response) {
  console.log('inside the getHardware function');
  // The below is a doubled effort since I'm also filter in the EJS file that renders each chore_type!
  let SQL = 'select * from memos WHERE chore_type=\'hardware\';';

  client.query(SQL)
    .then(results => {
      // console.log('results.rows get hardware: ', results.rows);
      response.render('./pages/hardware', { memos: results.rows});
    })
    .catch(err => console.log('ya done goofed: ', err));
}

function getPharmacy(request, response) {
  console.log('inside the getPharmacy function');

  let SQL = 'select * from memos WHERE chore_type=\'pharmacy\';';

  client.query(SQL)
    .then(results => {
      console.log('results.rows getMemos: ', results.rows);
      response.render('./pages/pharmacy', { memos: results.rows});
    })
    .catch(err => console.log('ya done goofed: ', err));
}

function getGroceries(request, response) {
  console.log('inside the getGroceries function');

  let SQL = 'select * from memos WHERE chore_type=\'groceries\';';

  client.query(SQL)
    .then(results => {
      console.log('results.rows getMemos: ', results.rows);
      response.render('./pages/groceries', { memos: results.rows});
    })
    .catch(err => console.log('ya done goofed: ', err));
}

function createMemo(request, response) {

  const memo = request.body.memo.toLowerCase();
  // const chore_type = request.body.chore_type.toLowerCase();
  const choreType = request.body.choreType.toLowerCase();
  console.log('choreType: ', choreType);

  let VALUES = [memo, choreType];
  const SQL = 'INSERT INTO memos(memo, chore_type) VALUES($1, $2) RETURNING id;';

  client.query(SQL, VALUES)
    .then(() => response.redirect('/'))
    .catch(err => console.log('ya done goofed: ',err));
}

function getMemos(request, response) {
  let SQL = 'SELECT * FROM memos ORDER BY chore_type ASC;';

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


