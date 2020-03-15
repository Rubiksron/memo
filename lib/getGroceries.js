'use strict';

const client = require('./Client');

function getGroceries(request, response) {
  let SQL = 'select * from memos WHERE chore_type=\'groceries\';';

  client.query(SQL)
    .then(results => {
      console.log('results.rows getMemos: ', results.rows);
      response.render('./pages/groceries', { memos: results.rows});
    })
    .catch(err => console.log('ya done goofed, getGroceries: ', err));
}

module.exports = getGroceries;
