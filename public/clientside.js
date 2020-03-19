'use strict';

// This function runs on page load, checks to see if the user has 'permission'

$(document).ready(function() {
  if(localStorage.choreBearUser) {
    const userObjParsed = JSON.parse(localStorage.choreBearUser);
    if(userObjParsed.permission) {
      console.log('user has permission');
      document.getElementById('permissionButton').click();
    }
  } else {
    console.log('user does not have permission');
  }
});

$(document).ready(function() {
  if(localStorage.choreBearUser) {
    const userObjParsed = JSON.parse(localStorage.choreBearUser);
    let name = userObjParsed.name;
    console.log(`thanks for signing up, ${name}, from clientside.js!`);
  } 
});

$('#createAccountForm').on('submit', function() {
  const user = {};
  user.name = event.target.user.value;
  user.password = event.target.password.value;
  user.remember = event.target.remember.checked;

  //show modal with 'welcome (user)'

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
  console.log('user logged out');
  //jquery fade in and out with modal stating you have been signed out
  localStorage.clear();
})
