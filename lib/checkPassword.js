'use strict';

const client = require('./Client');
const bcrypt = require('bcrypt');

function checkPassword(request, response) {
  const user = request.body.user.toLowerCase();
  var password = request.body.password;
  const SQL  = `SELECT * FROM users WHERE (user_name='${user}');`;

  return client.query(SQL)
    .then((results) => {
      if(results.rows.length === 0) {
        console.log('User Not Found!');
        response.redirect('/');
      }
      results.rows.forEach(element => {
        bcrypt.compare(password, element.user_password, function(err, result) {
          if (err){
            console.error('err: ', err);
          }
          else if(result) {
            var existingUserId = element.id;
            const SQL3 = `SELECT * FROM memos INNER JOIN users ON users.id=memos.id WHERE users.id=${existingUserId};`;
            client.query(SQL3)
              .then(() => response.render('../views/pages/beforeGetMemos', { userId: existingUserId }));
          }
        });
      });
    })
    .catch(err => console.log('ya done goofed, check password: ', err));
}
module.exports = checkPassword;
