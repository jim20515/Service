/* @flow */

'use strict';

import React, {
	Component
} from 'react';

import {
	connect,
	View
} from 'react-redux';

import Demand from '../pages/Demand';

export default class DemandContainer extends Component {
  render() {
    return (
      <Demand {...this.props}/>
    );
  }
}

export default connect((state) => {
	const {
		Demand
	} = state;
	return {
		Demand
	}
})(DemandContainer);
