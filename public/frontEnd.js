'use strict';

console.log('javascript proof of life!');
const user = document.getElementById('loginForm');
user.addEventListener('submit', userHandler);

function userHandler(event) {
  const user = {};
  console.log('userHandler proof of life!');

  user.name = event.target.user.value;
  user.password = event.target.password.value;
  console.log('user.name: ', user.name);
  console.log('user.password: ', user.password);

  var userObjStringified = JSON.stringify(user);

  localStorage.setItem('test', userObjStringified);
}

