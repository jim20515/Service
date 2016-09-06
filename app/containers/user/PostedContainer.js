/* @flow */

'use strict';

import React, {
	Component
} from 'react';

import {
	connect
} from 'react-redux';

import Posted from '../../pages/user/Posted';

export default class PostedContainer extends Component {
  render() {
    return (
      <Posted {...this.props}/>
    );
  }
}

export default connect((state) => {
	const {
		Posted
	} = state;
	return {
		Posted
	}
})(PostedContainer);
