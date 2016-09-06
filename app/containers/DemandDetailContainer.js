/* @flow */

'use strict';

import React, {
	Component
} from 'react';

import {
	connect,
	View
} from 'react-redux';

import DemandDetail from '../pages/DemandDetail';

export default class DemandDetailContainer extends Component {
  render() {
    return (
      <DemandDetail {...this.props}/>
    );
  }
}

export default connect((state) => {
	const {
		DemandDetail
	} = state;
	return {
		DemandDetail
	}
})(DemandDetailContainer);
