'use strict';

function beforeGetMemos(request, response) {
  response.render('../views/pages/beforeGetMemos');
}

module.exports = beforeGetMemos;
