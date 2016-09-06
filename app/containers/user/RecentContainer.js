/* @flow */

'use strict';

import React, {
	Component
} from 'react';

import {
	connect
} from 'react-redux';

import Recent from '../../pages/user/Recent';

export default class RecentContainer extends Component {
  render() {
    return (
      <Recent {...this.props}/>
    );
  }
}

export default connect((state) => {
	const {
		Recent
	} = state;
	return {
		Recent
	}
})(RecentContainer);
