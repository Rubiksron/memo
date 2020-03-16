'use strict';

// This function runs on page load, checks to see if the user has 'permission'
$( document ).ready(function() {
  if(localStorage.choreBear) {
    const userObjParsed = JSON.parse(localStorage.choreBear);
    if(userObjParsed.permission) {
      document.getElementById('permissionButton').click();
    }
  } else {
    console.error('Ron - ERROR: User Not Found, Create New Account!');
  }
});
// Grabbing the user name and password from the form and storing in Local Storage
$('#loginForm').on('submit', function() {
  const user = {};
  user.name = event.target.user.value;
  user.password = event.target.password.value;
  user.permission = true;

  const userObjStringified = JSON.stringify(user);
  localStorage.setItem('choreBear', userObjStringified);
});
