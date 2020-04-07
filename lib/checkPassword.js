'use strict';

const client = require('./Client');
const bcrypt = require('bcrypt');

function checkPassword(request, response) {
  const user = request.body.user.toLowerCase();
  const password = request.body.password.toLowerCase();
  const SQL  = 'SELECT * FROM users';
  const SQL2 = 'INSERT INTO users(user_name, user_password) VALUES($1, $2) RETURNING user_name, user_password, id;';
  const VALUES = [user, password];

  // bcrypt.hash(password, 10, function(err, hash) {
  //   console.log('hash 1: ', hash);
  //   console.log('password 1: ', password);

  //   bcrypt.compare(password, hash, function(err, result) {
  //     console.log('hash 2: ', hash);
  //     console.log('password 2: ', password);

  //     if(err) {throw (err);}
  //     if(result) {console.log('result: ', result);}
  //   });
  // });

  return client.query(SQL)
    .then((results) => {
      let verified = false;
      let existingUserId;

      results.rows.forEach(element => {
        if(element.user_name === user && element.user_password === password) {
          verified = true;
          existingUserId = element.id;
          console.log('Password Match! userId:', existingUserId);
        }
        return existingUserId;
      });
      var returnValues =[verified, existingUserId];
      return returnValues;
    })
    .then((returnValues) => {
      var verified = returnValues[0];
      var existingUserId = returnValues[1];

      const SQL3 = `SELECT * FROM memos INNER JOIN users ON users.id=memos.id WHERE users.id=${existingUserId};`;

      verified ? client.query(SQL3)
        .then(() => response.render('../views/pages/beforeGetMemos', { userId: existingUserId }))

        : client.query(SQL2, VALUES)
          .then((results) => {
            console.log('user added: ', results.rows);
            return results;
          })
          .then((results) => response.render('../views/pages/userId', { userId: results.rows[0].id}));
    })
    .catch(err => console.log('ya done goofed, check password: ', err));
}
module.exports = checkPassword;
