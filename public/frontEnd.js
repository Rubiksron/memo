'use strict';

$( document ).ready(function() {
  console.log( 'jquery ready!');
  if(localStorage.test) {
    const userObjParsed = JSON.parse(localStorage.test);
    console.log('data received from local storage: ', userObjParsed.name);
  } else {
    console.error('ya done goofed!');
  }
});

$('#loginForm').on('submit', function() {
  const user = {};
  user.name = event.target.user.value;
  user.password = event.target.password.value;
  
  const userObjStringified = JSON.stringify(user);
  localStorage.setItem('test', userObjStringified);
})
