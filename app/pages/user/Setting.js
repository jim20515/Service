/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch
} from 'react-native';

import Header from '../../components/Header';
import constants from '../../common/constants';
import Icon from '../../components/Icon';

export default class Setting extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftIcon='angle-left'
          leftIconAction={()=>this.props.navigator.pop()}
          title={this.props.parentTitle}>
        </Header>
        <ScrollView>
          <View style={styles.cell}>
            <Text style={styles.text}>2G/3G/4G顯示圖片</Text>
            <Switch />
          </View>
          <View style={styles.cell}>
            <Text style={styles.text}>關於我們</Text>
            <Icon.AngleRight />
          </View>
        </ScrollView>
      </View>
    );
  }

  _pressEvent() {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: constants.colors.lineColor,
    borderBottomWidth: 1,
  },

  text: {
    flex: 1,
    fontSize: 16,
    color: constants.colors.text3Color,
  },



  cell: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderBottomColor: constants.colors.lineColor,
    borderBottomWidth: 1,
    marginLeft: 20,
  },
});
