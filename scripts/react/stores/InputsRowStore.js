var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var constants = require('../constants/constants');
var lodash = require('lodash');

// Define initial data points
var _inputs = {
  keys: [],
  values: {}
};

function _loadInputsData(result) {
  _inputs = result;
  console.info('INPUTS_RECEIVE_LOAD');
}

var InputsRowStore = lodash.extend({}, EventEmitter.prototype, {

  getAllInputs: function() {
    return _inputs;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {

    case constants.INPUTS_RECEIVE_CALL:
      console.log('INPUTS_RECEIVE_CALL');
      break;

    case constants.INPUTS_RECEIVE_LOAD:
      _loadInputsData(action.data);
      break;

    default:
      return true;
  }

  console.log('InputsRowStore emitChange');
  InputsRowStore.emitChange();
  return true;

});

module.exports = InputsRowStore;
