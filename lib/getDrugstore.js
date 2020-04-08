'use strict';

const client = require('./Client');

function getdrugstore(request, response) {
  var idInput = request.params.idInput;
  const SQL = `SELECT * FROM memos INNER JOIN users ON users.id=memos.id WHERE users.id=${idInput} AND chore_type=\'drugstore\' ORDER BY memo_id DESC;`;

  client.query(SQL)
    .then(results => {
      response.render('./pages/drugstore', { memos: results.rows});
    })
    .catch(err => console.log('ya done goofed, getDrugstore: ', err));
}

module.exports = getdrugstore;
