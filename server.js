'use strict';

require('dotenv').config();

//Application Dependencies
const express = require('express');
// const pg = require('pg');
const methodOverride = require('method-override');

//Application Setup
const app = express();
const PORT = process.env.PORT || 3001;

//Database Setup
const client = require('./lib/Client');

//Set view enginge for server-side templating
app.set('view engine', 'ejs');

//Static Routes
app.use(express.static('public'));

//Application Middleware
app.use(express.urlencoded({ extended:true }));
app.use(methodOverride('_method'));

// Helper Functions
const getMemos = require('./lib/getMemos');
const createMemo = require('./lib/createMemo');
const getGroceries = require('./lib/getGroceries');
const getHardware = require('./lib/getHardware');
const getDrugstore = require('./lib/getDrugstore');
const deleteMemo = require('./lib/deleteMemo');
const login = require('./lib/login');

//Routes
app.get('/', login);
app.get('/createAccount', createAccount);
app.post('/createUser', createUser)
app.post('/checkPassword', checkPassword);
app.get('/getMemos', getMemos);
app.get('/groceries', getGroceries);
app.get('/drugstore', getDrugstore);
app.get('/hardware', getHardware);
app.post('/createMemo', createMemo);
app.delete('/delete/:id', deleteMemo);
app.get('*', (request, response) => response.status(404).send('This Route Does Not Exist'));

function createUser(request, response) {
  const user = request.body.user.toLowerCase();
  const password = request.body.password.toLowerCase();
  const VALUES = [user, password];
  const SQL = 'INSERT INTO users(user_name, user_password) VALUES($1, $2) RETURNING user_name, user_password;';
  console.log('user: ', user, 'password: ', password);
  client.query(SQL, VALUES)
    .then(() => response.redirect('/'))
    .catch(err => console.log('ya done goofed: ',err));
}

function createAccount(request, response) {
  response.render('./pages/createAccount');
}

function checkPassword(request, response) {
  const user = request.body.user.toLowerCase();
  const password = request.body.password.toLowerCase();
  const VALUES = [user, password];
  // const SQLpost = 'INSERT INTO users(user_name, user_password) VALUES($1, $2) RETURNING user_name, user_password;';
  const SQL  = 'SELECT * FROM users';

  client.query(SQL)
    .then((results) => {
      // console.log('checking password');
      // console.log('results.rows: ', results.rows);
      results.rows.forEach(element => {
        if(element.user_name === user && element.user_password === password) {
          console.log('Identity Confirmed!');
          // results.redirect('/getMemos');
        } else {
          return console.log('Unknown User!');
          // response.redirect('/');
        }

      });
    })
    .then(() => response.redirect('/getMemos'))
    .catch(err => console.log('ya done goofed: ',err));
}


client.connect()
  .then(() => {
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
  });


