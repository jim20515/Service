/* @flow */

'use strict';

import React, {
	Component
} from 'react';

import {
	connect
} from 'react-redux';

import Supply from '../pages/Supply';

export default class SupplyContainer extends Component {
  render() {
    return (
      <Supply {...this.props}/>
    );
  }
}

export default connect((state) => {
	const {
		Supply
	} = state;
	return {
		Supply
	}
})(SupplyContainer);
