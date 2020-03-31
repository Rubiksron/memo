'use strict';

const client = require('./Client');

function checkPassword(request, response) {
  const user = request.body.user.toLowerCase();
  const password = request.body.password.toLowerCase();
  const SQL  = 'SELECT * FROM users';
  const SQL2 = 'INSERT INTO users(user_name, user_password) VALUES($1, $2) RETURNING user_name, user_password, id;';
  const VALUES = [user, password];

  return client.query(SQL)
    .then((results) => {
      let verified = false;
      let existingUserId;

      results.rows.forEach(element => {
        if(element.user_name === user && element.user_password === password) {
          verified = true;
          existingUserId = element.id;
          console.log('before - existingUserId: ', existingUserId);
          console.log('Password Match!');
        }
        return existingUserId;
      });
      console.log('after - existingUserId: ', existingUserId);
      var returnValues =[verified, existingUserId];
      return returnValues;
    })
    .then((returnValues) => {
      var verified = returnValues[0];
      var existingUserId = returnValues[1];
      console.log('line - 33 existingUserId: ', existingUserId);

      // in the response.redirect('/getMemos') below i want to send the id from db
      verified ? response.render('../views/pages/beforeGetMemos', { userId: existingUserId })
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
