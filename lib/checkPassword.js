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
      var arrayLength = results.rows.length;
      console.log('results.rows: ', results.rows);
      var newUserId = results.rows[arrayLength -1].id;
      let verified = false;

      results.rows.forEach(element => {
        if(element.user_name === user && element.user_password === password) {
          verified = true;
          console.log('Password Match!');
        }
      });

      var returnValues =[verified, newUserId];
      return returnValues;
    })
    .then((returnValues) => {
      var verified = returnValues[0];
      var newUserId = returnValues[1];
      console.log('verified after: line:39', verified);

      verified ? response.redirect('/getMemos')
        : client.query(SQL2, VALUES)
          .then(() => console.log('added user to db!'))
          .then(() => response.render('../views/pages/userId', { userId: newUserId}));
    })
    .catch(err => console.log('ya done goofed, check password: ', err));
}

module.exports = checkPassword;
