/* @flow */

'use strict';

import React, {
	Component
} from 'react';

import {
	connect
} from 'react-redux';

import Chat from '../pages/Chat';

export default class ChatContainer extends Component {
  render() {
    return (
      <Chat {...this.props}/>
    );
  }
}

export default connect((state) => {
	const {
		Chat
	} = state;
	return {
		Chat
	}
})(ChatContainer);
