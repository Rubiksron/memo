'use strict';

const client = require('./Client');

function checkPassword(request, response) {

  const user = request.body.user.toLowerCase();
  const password = request.body.password.toLowerCase();
  const SQL  = 'SELECT * FROM users';
  const SQL2 = 'INSERT INTO users(user_name, user_password) VALUES($1, $2) RETURNING user_name, user_password;';
  const VALUES = [user, password];

  return client.query(SQL)
    .then((results) => {
      let verified = false;
      results.rows.forEach(element => {
        if(element.user_name === user && element.user_password === password) {
          verified = true;
        }
      });
      return verified;
    })
    .then((verified) => {
      verified ? response.redirect('/getMemos') : client.query(SQL2, VALUES)
        .then(() => response.redirect('/'));
    })
    .catch(err => console.log('ya done goofed, checkPassword: ',err));
}

module.exports = checkPassword;
