'use strict';

var InputsRowActions = require('../actions/InputsRowActions');
var InputsRowStore = require('../stores/InputsRowStore');

var LocalValues = require('./LocalValues');

InputsRowActions.receiveInputs();

function getInputs() {
  var result = InputsRowStore.getAllInputs();
  return {
    data: result
  }
}

var InputsRow = React.createClass({
  getInitialState: function() {
    return getInputs();
  },
  componentDidMount: function() {
    InputsRowStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    InputsRowStore.removeChangeListener(this._onChange);
  },
  addKey: function() {
    console.log('MODAL')
  },
  onInputChange: function() {

  },
  onInputKeyClick: function() {

  },
  showLocalized: function() {
    console.log(React.findDOMNode(this.refs.myInput).value)
  },
  render: function() {
    var result = this.state.data,
        keys = result.keys,
        values = result.values,
        locale_id = result.locale_id,
        project_id = result.project_id,
        version_id = result.version_id,
        self = this;

    console.log('<InputsRow /> render');

    var inputNodes = keys.map && keys.map(function(item, keyIndex) {
      var keyId = item.id;
      return (
        <div className="row" key={keyIndex} className={'inputs-row ' + (item.disabled ? 'inputs-row_disabled':'')}>
          <div className="col-md-12">
            <div className="col-md-6 form-group">
              <div className="input-group">
                <div className="input-group-addon">
                  <i className="fa fa-info fa-fw"></i>
                </div>
                {/*<input className="key-input form-control" value={item.name} onClick={self.onInputKeyClick.bind(self,item)} readOnly />*/}
                <div className="key-input form-control">{item.name}</div>
              </div>
            </div>
            <LocalValues localObj={values[keyId]} locale_id={locale_id} project_id={project_id} sendItem={self.sendItem} key_id= {keyId}/>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div>{inputNodes}</div>
      </div>
    )
  },
  _onChange: function() {
    this.setState(getInputs());
  }

});

module.exports = InputsRow;
