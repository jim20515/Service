/* @flow */

'use strict';

import React, {
	Component
} from 'react';

import {
	connect
} from 'react-redux';

import Transaction from '../../pages/user/Transaction';

export default class TransactionContainer extends Component {
  render() {
    return (
      <Transaction {...this.props}/>
    );
  }
}

export default connect((state) => {
	const {
		Transaction
	} = state;
	return {
		Transaction
	}
})(TransactionContainer);
