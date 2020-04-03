'use strict';

function dropDownPage(request, response) {
  var idInput = request.body.idInput;
  response.render('./pages/dropDownPage', { userId: idInput });
}

module.exports = dropDownPage;