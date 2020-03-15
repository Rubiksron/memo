'use strict';

const client = require('./Client');

function getHardware(request, response) {
  // The below is a doubled effort since I'm also filter in the EJS file that renders each chore_type!
  let SQL = 'select * from memos WHERE chore_type=\'hardware\';';

  client.query(SQL)
    .then(results => {
      response.render('./pages/hardware', { memos: results.rows});
    })
    .catch(err => console.log('ya done goofed, getHardware: ', err));
}

module.exports = getHardware;
