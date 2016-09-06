'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	StatusBar
} from 'react-native';

import Constants from '../common/constants';

class StatusBarIOS extends Component {
	render() {
		return (
			<View>
				<StatusBar {...this.props}/>
				<View style={styles.statusBar} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	statusBar: {
		flex: 1,
		height: 20,
		backgroundColor: Constants.colors.themeColor,
	}
});


export default StatusBarIOS;