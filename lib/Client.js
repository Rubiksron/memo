'use strict';
const pg = require('pg');

const client = new pg.Client(process.env.DATABASE_URL);
client.on('err: ', err => console.error('ya done goofed, Client.js', err));

module.exports = client;
