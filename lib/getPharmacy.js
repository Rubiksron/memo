'use strict';

const client = require('./Client');

function getPharmacy(request, response) {
  let SQL = 'select * from memos WHERE chore_type=\'pharmacy\';';

  client.query(SQL)
    .then(results => {
      console.log('results.rows getMemos: ', results.rows);
      response.render('./pages/pharmacy', { memos: results.rows});
    })
    .catch(err => console.log('ya done goofed: ', err));
}

module.exports = getPharmacy;
