'use strict';

// This function runs on page load, checks to see if the user has 'permission'

$(document).ready(function() {
  if(localStorage.choreBear) {
    const userObjParsed = JSON.parse(localStorage.choreBear);
    if(userObjParsed.permission) {
      console.log('user has permission');
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
    localStorage.setItem('choreBear', userObjStringified);
  }
  console.log('- we did not save your data locally -');
});
