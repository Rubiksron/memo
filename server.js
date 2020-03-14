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

//Routes
// app.get('/', login);
app.get('/', getMemos);
app.get('/groceries', getGroceries);
app.get('/drugstore', getDrugstore);
app.get('/hardware', getHardware);
app.post('/createMemo', createMemo);
app.delete('/delete/:id', deleteMemo);
app.get('*', (request, response) => response.status(404).send('This Route Does Not Exist'));

// function login(request, response) {
//   console.log('login here!!!!!!')
// }

client.connect()
  .then(() => {
    app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
  });


