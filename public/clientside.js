'use strict';

//just below i want to run on page load and check local storage for a user then assign it to the value of the input for the users convenience.

$(document).ready(function() {
  if(localStorage.choreBearUser) {
    const userObjParsed = JSON.parse(localStorage.choreBearUser);
    var $user = $('#user').val(userObjParsed.name);
    var $password = $('#password').val(userObjParsed.password);
    console.log('$password: ', $password);
    console.log('$user: ', $user);
  }
})

// This function runs on page load, checks to see if the user has 'permission'
$(document).ready(function() {
  if(localStorage.choreBearUser) {
    const userObjParsed = JSON.parse(localStorage.choreBearUser);
    if(userObjParsed.permission) {
      console.log(`${userObjParsed.name} has permission to access chorebear!`);
      document.getElementById('permissionButton').click();
    }
  } else {
    console.log('user does not have permission');
  }
});

$('#createAccountForm, #choreBearLogin').on('submit', function() {
  // event.preventDefault();
  const user = {};
  user.name = event.target.user.value;
  user.password = event.target.password.value;
  user.remember = event.target.remember.checked;

  if(user.remember) {
    user.permission = true;
    const userObjStringified = JSON.stringify(user);
    localStorage.setItem('choreBearUser', userObjStringified);
  }
});

$('#logoutButtonForm').on('submit', function() {
  event.preventDefault();

  if(localStorage.choreBearUser) {
    $('#showLogout').fadeIn();
    var userObjParsed = JSON.parse(localStorage.choreBearUser);
    $('#showLogout').append(`${userObjParsed.name} logged out`);
    localStorage.clear();
    console.log('local storage cleared!');
    $('#user').val('');
    $('#password').val('');
    $('#showLogout').fadeOut(2500);
  }
  else {
    console.log('no data in local storage!');
  }
});

