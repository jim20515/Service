/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import constants from '../common/constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export class AngleRight extends Component {
  render() {
    return (
      <View style={[styles.icon, {...this.props.style}]}>
        <FontAwesome name="angle-right" size={30} color={constants.colors.themeColor} />
      </View>

    );
  }
}

export default {
	AngleRight: AngleRight
}

const styles = StyleSheet.create({
  icon: {
    width: 30,
    // marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
