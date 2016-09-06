/* @flow */

'use strict';

import React, {
	Component
} from 'react';

import {
	connect
} from 'react-redux';

import PeopleSeen from '../pages/PeopleSeen';

export default class PeopleSeenContainer extends Component {
  render() {
    return (
      <PeopleSeen {...this.props}/>
    );
  }
}

export default connect((state) => {
	const {
		PeopleSeen
	} = state;
	return {
		PeopleSeen
	}
})(PeopleSeenContainer);
