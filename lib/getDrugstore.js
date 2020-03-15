'use strict';

const client = require('./Client');

function getdrugstore(request, response) {
  let SQL = 'select * from memos WHERE chore_type=\'drugstore\';';

  client.query(SQL)
    .then(results => {
      console.log('results.rows getMemos: ', results.rows);
      response.render('./pages/drugstore', { memos: results.rows});
    })
    .catch(err => console.log('ya done goofed, getDrugstore: ', err));
}

module.exports = getdrugstore;
