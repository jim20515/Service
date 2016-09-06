'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity
} from 'react-native';

import Constants from '../common/constants';

class Category extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.view}>
					<TouchableOpacity style={[styles.btn,{
					backgroundColor: "rgba(241,13,13,1)"}]}>
						<Text>排隊</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.view}>
					<TouchableOpacity style={[styles.btn,{
					backgroundColor: "rgba(233,239,6,1)"}]}>
						<Text>Part Time</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.view}>
					<TouchableOpacity style={[styles.btn,{
					backgroundColor: "rgba(53,11,249,1)"}]}>
						<Text>即時</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.view}>
					<TouchableOpacity style={[styles.btn,{
					backgroundColor: "rgba(0,205,255,1)"}]}>
						<Text>一起</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.view}>
					<TouchableOpacity style={[styles.btn,{
					backgroundColor: "rgba(246,115,8,1)"}]}>
						<Text>代購</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.view}>
					<TouchableOpacity style={[styles.btn,{
					backgroundColor: "rgba(236,0,185,1)"}]}>
						<Text>交易</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.view}>
					<TouchableOpacity style={[styles.btn,{
					backgroundColor: "rgb(184,233,134)"}]}>
						<Text>其他</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexWrap: 'wrap',
		flexDirection: 'row',
		backgroundColor: '#eef0f3',
		// justifyContent: 'center',
		height: 200,
		// alignItems: 'stretch',
		borderWidth: Constants.pixel,
		borderColor: Constants.colors.borderColor,
	},
	btn: {
		height: 70,
		width: 70,
		borderWidth: 2 * Constants.pixel,
		borderColor: Constants.colors.borderColor,
		borderRadius: 35,
		justifyContent: 'center',
		alignItems: 'center',
	},
	view: {
		width: 80,
		marginLeft: 4,
		marginTop: 10
	}
});


export default Category;
