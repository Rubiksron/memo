'use strict';

const client = require('./Client');

function checkPassword(request, response) {

  const user = request.body.user.toLowerCase();
  const password = request.body.password.toLowerCase();
  const SQL  = 'SELECT * FROM users';

  return client.query(SQL)
    .then((results) => {
      let go = false;
      console.log('go before: ', go);
      results.rows.forEach(element => {
        if(element.user_name === user && element.user_password === password) {
          go = true;
          console.log('Password Match!');
        }
      });
      return go;
    })
    .then((go) => {
      console.log('go after: ', go);
      go ? response.redirect('/getMemos') : response.redirect('/');
    })
    .catch(err => console.log('ya done goofed check password: ',err));
}

module.exports = checkPassword;
