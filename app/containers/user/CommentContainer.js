/* @flow */

'use strict';

import React, {
	Component
} from 'react';

import {
	connect
} from 'react-redux';

import Comment from '../../pages/user/Comment';

export default class CommentContainer extends Component {
  render() {
    return (
      <Comment {...this.props}/>
    );
  }
}

export default connect((state) => {
	const {
		Comment
	} = state;
	return {
		Comment
	}
})(CommentContainer);
