'use strict';

//just below i want to run on page load and check local storage for a user then assign it to the value of the input for the users convenience.
$(document).ready(function() {
  if(localStorage.choreBearUser) {
    const userObjParsed = JSON.parse(localStorage.choreBearUser);
    if(userObjParsed.permission) {
      $('#user').val(userObjParsed.name);
      $('#password').val(userObjParsed.password);
    }
  }

});

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

// Form Handlers
$('#choreBearLogin').on('submit', function() {
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

$('#createAccountForm').on('submit', function() {

  const user = {};
  user.name = event.target.user.value;
  user.password = event.target.password.value;
  user.remember = event.target.remember.checked;
  console.log('user props: ', user.name, user.password, user.remember);

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

    //logout the user
    console.log('before - userOuserObjParsed:',userObjParsed);
    userObjParsed.permission = false;
    localStorage.clear();
    console.log('after - userOuserObjParsed:',userObjParsed);

    //set the updated permissions in userObjParsed back into Local Storage
    const userObjStringified = JSON.stringify(userObjParsed);
    localStorage.setItem('choreBearUser', userObjStringified);

    console.log('user logged out!');

    $('#user').val('');
    $('#password').val('');
    $('#showLogout').fadeOut(2500);
  }
  else {
    console.log('no data in local storage!');
  }
});

