'use strict';

var LocalValues = React.createClass({

  getInitialState: function() {
    return {};
  },
  changeLocalizedValue: function(e) {
    //bla bla
  },
  showSuggestion: function() {
    //bla bla
  },
  prepareSend: function() {
    var item = this.props.localObj;
    var value = React.findDOMNode(this.refs.childInput).value;

    if (item) {
      item.name = value;
    } else {
      item = {
        key_id: this.props.key_id,
        name: value,
        locale_id: this.props.locale_id,
        project_id: this.props.project_id,
        lock_version: 0
      };
    }

    this.props.sendItem(item);
  },
  render: function() {
    var item = this.props.localObj;
    var value = item ? item.name : '';

    console.log('<LocalValues /> render');

      return (
        <div className="col-md-6 form-group">
          <div className="input-group">
            <input ref="childInput" className="key-input form-control" type='text' defaultValue={value}
              onChange={this.changeLocalizedValue}
              onClick={this.showSuggestion.bind(this, value)} />
            <div className="input-group-addon input-group-addon_btn">
              <button className="btn btn-default btn_right-radius" onClick={this.prepareSend}>
                <i className="fa fa-check fa-fw"></i>
              </button>
            </div>
          </div>
        </div>
      )
  },

});

module.exports = LocalValues;
