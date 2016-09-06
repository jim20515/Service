/* @flow */

'use strict';

import React, {
	Component
} from 'react';

import {
	connect
} from 'react-redux';

import User from '../pages/User';

export default class UserContainer extends Component {
  render() {
    return (
      <User {...this.props}/>
    );
  }
}

export default connect((state) => {
	const {
		User
	} = state;
	return {
		User
	}
})(UserContainer);
