'use strict';

function beforeGetMemos(request, response) {
  var idInput = request.params.idInput;
  response.render('../pages/beforeGetMemos', { userId: idInput });
}

module.exports = beforeGetMemos;
