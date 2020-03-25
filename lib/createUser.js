'use strict';

const client = require('./Client');

function createUser(request, response) {
  const user = request.body.user.toLowerCase();
  const password = request.body.password.toLowerCase();
  const VALUES = [user, password];
  const SQL = 'INSERT INTO users(user_name, user_password) VALUES($1, $2) RETURNING user_name, user_password, id;';

  client.query(SQL, VALUES)
    .then((result) => console.log('result.id: ', result.id))
    .then(() => response.redirect('/'))
    .catch(err => console.log('ya done goofed, createUser: ', err));
}

module.exports = createUser;
