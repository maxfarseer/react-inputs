var AppDispatcher = require('../dispatcher/AppDispatcher');
var constants = require('../constants/constants');

// Define action methods
var InputsRowActions = {

  receiveInputs: function() {
    AppDispatcher.handleAction({
      actionType: constants.INPUTS_RECEIVE_CALL
    });
    var url = window.location.origin + "/json/mock.json";
    $.ajax({
      method: 'GET',
      url: url,
    }).done(function(result) {
      AppDispatcher.handleAction({
        actionType: constants.INPUTS_RECEIVE_LOAD,
        data: result
      });
    });
  }

}

module.exports = InputsRowActions;
