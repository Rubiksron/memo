'use strict';

const client = require('./Client');
const bcrypt = require('bcrypt');

function createUser(request, response) {
  const user = request.body.user.toLowerCase();
  var password = request.body.password;

  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      if(err) {console.log('createUser err: ', err);}
      password = hash;
      const VALUES = [user, password];
      const SQL = 'INSERT INTO users(user_name, user_password) VALUES($1, $2) RETURNING user_name, user_password, id;';
      client.query(SQL, VALUES)
        .then((results) => {
          console.log('user added: ', results.rows[0].user_name);
          return results;
        })
        .then((results) => response.render('../views/pages/userId', { userId: results.rows[0].id}));
    });
  });
}

module.exports = createUser;
