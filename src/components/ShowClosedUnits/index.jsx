import React from 'react';

import {connect} from 'react-redux';

import {setIncludeUnitsClosed} from '../../store/actions/find_units';

import './style.css';

class ShowClosedUnits extends React.Component {
  constructor() {
    super();

    this.changeIncludeUnitsClosed = this.changeIncludeUnitsClosed.bind(this);
  }

  changeIncludeUnitsClosed(event) {
    this.props.setIncludeUnitsClosed(event.target.checked);
  }

  render() {
    return (
      <div className="show-closed-units-container">
        <input
          type="checkbox"
          value="true"
          name="show-closed-units"
          id="show-closed-units"
          onChange={this.changeIncludeUnitsClosed} />
        <label htmlFor="show-closed-units">Exibir unidades fechadas</label>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setIncludeUnitsClosed: includeUnitsClosed => {
      return dispatch(setIncludeUnitsClosed(includeUnitsClosed));
    }
  };
}

export default connect(null, mapDispatchToProps)(ShowClosedUnits);
