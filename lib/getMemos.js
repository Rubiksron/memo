'use strict';

const client = require('./Client');

function getMemos(request, response) {

  const idInput = request.params.idInput;
  console.log('line 13 - idInput: ', idInput);
  const SQL = `SELECT * FROM memos INNER JOIN users ON users.id=memos.id WHERE users.id=${idInput};`;

  client.query(SQL)
    .then(results => {
      response.render('./index', { memos: results.rows});
    })
    .catch(err => console.log('ya done goofed, getMemos: ', err));
}

module.exports = getMemos;
