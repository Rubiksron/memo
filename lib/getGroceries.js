'use strict';

const client = require('./Client');

function getGroceries(request, response) {
  var idInput = request.params.idInput;
  const SQL = `SELECT * FROM memos INNER JOIN users ON users.id=memos.id WHERE users.id=${idInput};`;

  client.query(SQL)
    .then(results => {
      response.render('./pages/groceries', { memos: results.rows});
    })
    .catch(err => console.log('ya done goofed, getGroceries: ', err));
}

module.exports = getGroceries;
