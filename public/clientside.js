'use strict';

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
    $('#showLogout').fadeOut(2250);
  }
  else {
    console.log('no data in local storage!');
  }
});

