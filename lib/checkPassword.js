'use strict';

const client = require('./Client');

function checkPassword(request, response) {

  const user = request.body.user.toLowerCase();
  const password = request.body.password.toLowerCase();
  const SQL  = 'SELECT * FROM users';

  return client.query(SQL)
    .then((results) => {
      console.log('response.body: ', response.body);
      console.log('request.body: ', request.body);
      results.rows.forEach(element => {
        if(element.user_name === user && element.user_password === password) {
          console.log('Password Match!');
          response.redirect('/getMemos');
        }
      });
    })
    .then(() => response.redirect('/'))
    .catch(err => console.log('ya done goofed check password: ',err));
}

module.exports = checkPassword;
