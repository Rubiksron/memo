'use strict';

const client = require('./Client');

function checkPassword(request, response) {
  const user = request.body.user.toLowerCase();
  const password = request.body.password.toLowerCase();
  const VALUES = [user, password];
  // const SQLpost = 'INSERT INTO users(user_name, user_password) VALUES($1, $2) RETURNING user_name, user_password;';
  const SQL  = 'SELECT * FROM users';

  client.query(SQL)
    .then((results) => {
      // console.log('checking password');
      // console.log('results.rows: ', results.rows);
      results.rows.forEach(element => {
        if(element.user_name === user && element.user_password === password) {
          console.log('Identity Confirmed!');
          // results.redirect('/getMemos');
        } else {
          return console.log('Unknown User!');
          // response.redirect('/');
        }

      });
    })
    .then(() => response.redirect('/getMemos'))
    .catch(err => console.log('ya done goofed: ',err));
}

module.exports = checkPassword;