/* @flow */

'use strict';

import React, {
	Component
} from 'react';

import {
	connect
} from 'react-redux';

import Exchange from '../../pages/user/Exchange';

export default class ExchangeContainer extends Component {
  render() {
    return (
      <Exchange {...this.props}/>
    );
  }
}

export default connect((state) => {
	const {
		Exchange
	} = state;
	return {
		Exchange
	}
})(ExchangeContainer);
