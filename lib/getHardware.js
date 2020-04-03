'use strict';

const client = require('./Client');

function getHardware(request, response) {
  var idInput = request.params.idInput;
  const SQL = `SELECT * FROM memos INNER JOIN users ON users.id=memos.id WHERE users.id=${idInput};`;

  client.query(SQL)
    .then(results => {
      response.render('./pages/hardware', { memos: results.rows});
    })
    .catch(err => console.log('ya done goofed, getHardware: ', err));
}

module.exports = getHardware;
