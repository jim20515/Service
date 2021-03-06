'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	ActivityIndicator,
} from 'react-native';

import Common from '../common/constants';

class Loading extends Component {
	render() {
		return (
			<View style={styles.loading}>
				<ActivityIndicator style={styles.loadingTilte} color='white' />
				<Text style={styles.loadingTitle}>加載中......</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	loading: {
		backgroundColor: 'gray',
		height: 80,
		width: 100,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		top: (Common.window.height - 80) / 2,
		left: (Common.window.width - 100) / 2,
	},
	loadingTitle: {
		marginTop: 10,
		fontSize: 14,
		color: 'white'
	}
});


export default Loading;