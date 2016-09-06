import {
	Dimensions,
	PixelRatio
} from 'react-native';

//单位像素
let pixel = 1 / PixelRatio.get();

let window = {
	width: Dimensions.get('window').width,
	height: Dimensions.get('window').height
}

let defalutColors = {
	lightGray: '#ddd',
	darkGray: '#333',
}

let colors = {
	themeColor: '#FF6600',
	borderColor: defalutColors.lightGray,
	lineColor: defalutColors.lightGray,
	text1Color: '#ddd',
	text2Color: '#aaa',
	text3Color: '#777',
	text4Color: '#444',
	text5Color: '#111',
}

let storeKeys = {
	SEARCH_HISTORY_KEY: 'SEARCH_HISTORY_KEY',
}

let commonValue = {
	tabBarHeight: 150
}

export default {
	pixel: pixel,
	window: window,
	colors: colors,
	storeKeys: storeKeys,
	commonValue: commonValue
}
