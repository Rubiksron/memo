'use strict';

$( document ).ready(function() {
  if(localStorage.choreBear) {
    const userObjParsed = JSON.parse(localStorage.choreBear);
    if(userObjParsed.permission) {
      console.log('persmission granted');
    }
  } else {
    console.error('Ron - ERROR: user not found, create new account!');
  }
});

$('#loginForm').on('submit', function() {
  const user = {};
  user.name = event.target.user.value;
  user.password = event.target.password.value;
  user.permission = true;

  const userObjStringified = JSON.stringify(user);
  localStorage.setItem('choreBear', userObjStringified);
});
