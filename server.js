'use strict';

//Environmental Variables
require('dotenv').config();

//Application Dependencies
const express = require('express');
const methodOverride = require('method-override');
const cors = require('cors');

//Application Setup
const app = express();
const PORT = process.env.PORT || 3001;

//Database Setup
const client = require('./lib/Client');

//Static Route - app lands on index.html
app.use(express.static('public'));

//Set view enginge for server-side templating
app.set('view engine', 'ejs');

//Application Middleware
app.use(cors());
app.use(express.urlencoded({ extended:true }));
app.use(methodOverride('_method'));

//Helper Functions
const getMemos = require('./lib/getMemos');
const aboutMe = require('./lib/aboutMe');
const beforeGetMemos = require('./lib/beforeGetMemos');
const deleteAccount = require('./lib/deleteAccount');
const dropDownPage = require('./lib/dropDownPage');
const createMemo = require('./lib/createMemo');
const getGroceries = require('./lib/getGroceries');
const getHardware = require('./lib/getHardware');
const getDrugstore = require('./lib/getDrugstore');
const deleteMemo = require('./lib/deleteMemo');
const createUser = require('./lib/createUser');
const checkPassword = require('./lib/checkPassword');
const createAccount = require('./lib/createAccount');
const logout = require('./lib/logout');

//Routes
app.get('/logout', logout);
app.get('/aboutMe', aboutMe);
app.get('/createAccount', createAccount);
app.get('/beforeGetMemos', beforeGetMemos);
app.get('/getMemos/:idInput', getMemos);
app.get('/groceries/:idInput', getGroceries);
app.get('/drugstore/:idInput', getDrugstore);
app.get('/hardware/:idInput', getHardware);
app.post('/createUser', createUser);
app.post('/dropDownPage', dropDownPage);
app.post('/checkPassword', checkPassword);
app.post('/createMemo', createMemo);
app.delete('/deleteAccount/:id', deleteAccount);
app.delete('/delete/:memo_id', deleteMemo);
app.get('*', (request, response) => response.status(404).send('This Route Does Not Exist'));

client.connect()
  .then(() => {
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
  });


