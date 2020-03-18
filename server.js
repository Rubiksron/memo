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


//Static Routes
app.use(express.static('public'));

//Set view enginge for server-side templating
app.set('view engine', 'ejs');
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
const createUser = require('./lib/createUser');
const checkPassword = require('./lib/checkPassword');
const createAccount = require('./lib/createAccount');

//Routes
//the below call back 'login' is not invoked with an index.html in the public file
//the other routes are called as expected.
app.get('/', login);
app.get('/createAccount', createAccount);
app.post('/createUser', createUser);
app.post('/checkPassword', checkPassword);
app.get('/getMemos', getMemos);
app.get('/groceries', getGroceries);
app.get('/drugstore', getDrugstore);
app.get('/hardware', getHardware);
app.post('/createMemo', createMemo);
app.delete('/delete/:id', deleteMemo);
app.get('*', (request, response) => response.status(404).send('This Route Does Not Exist'));

client.connect()
  .then(() => {
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
  });


