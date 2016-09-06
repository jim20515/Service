/* @flow */

'use strict';

import React, {
	Component
} from 'react';

import {
	connect
} from 'react-redux';

import Favorite from '../../pages/user/Favorite';

export default class FavoriteContainer extends Component {
  render() {
    return (
      <Favorite {...this.props}/>
    );
  }
}

export default connect((state) => {
	const {
		Favorite
	} = state;
	return {
		Favorite
	}
})(FavoriteContainer);
