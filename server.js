'use strict';

require('dotenv').config();

//Application Dependencies
const express = require('express');
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
const beforeGetMemos = require('./lib/beforeGetMemos');
const dropDownPage = require('./lib/dropDownPage');
const createMemo = require('./lib/createMemo');
const getGroceries = require('./lib/getGroceries');
const getHardware = require('./lib/getHardware');
const getDrugstore = require('./lib/getDrugstore');
const deleteMemo = require('./lib/deleteMemo');
const login = require('./lib/login');
const createUser = require('./lib/createUser');
const checkPassword = require('./lib/checkPassword');
const createAccount = require('./lib/createAccount');
const logout = require('./lib/logout');

//Routes

//the '/' route call back 'login' is not invoked with the '/' route, but index.html. in the public file, this way i can grab the login info and store it in local storage the other routes are called as expected.
app.get('/', login);
app.get('/logout', logout);
app.get('/createAccount', createAccount);
app.post('/createUser', createUser);
app.post('/dropDownPage', dropDownPage);
app.post('/checkPassword', checkPassword);
app.get('/beforeGetMemos', beforeGetMemos);
app.get('/getMemos/:idInput', getMemos);
app.get('/groceries/:idInput', getGroceries);
app.get('/drugstore/:idInput', getDrugstore);
app.get('/hardware/:idInput', getHardware);
app.post('/createMemo', createMemo);
app.delete('/delete/:memo_id', deleteMemo);
app.get('*', (request, response) => response.status(404).send('This Route Does Not Exist'));

client.connect()
  .then(() => {
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
  });


