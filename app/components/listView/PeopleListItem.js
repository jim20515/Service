/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import constants from '../../common/constants';
import {AngleRight} from '../Icon';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class PeopleListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {...this.props};
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.state.pressEvent.bind(this)}>
          <View style={styles.innerContainer}>
            <View>
              <FontAwesome color={constants.colors.text2Color} size={30} name='user' />
            </View>
            <View
              style={{
                flex: 1 ,
              marginLeft:10}}>
              <Text
                numberOfLines={1}
                style={{
                  color: constants.colors.text5Color,
                fontSize: 16}}>
                王大明
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  color: constants.colors.text3Color,
                fontSize: 12}}>
                嗨大家好
              </Text>
            </View>
            <View
              style={{
                marginLeft:10,
                justifyContent: 'center',
                alignItems: 'flex-end'
              }}>
              <Text
                style={{
                color:constants.colors.text3Color}}>
                2016/08/20
              </Text>
              <Text style={{
              color:constants.colors.text3Color}}>
                16:33:44 看過
              </Text>
            </View>
            <AngleRight />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#fff',
		justifyContent: 'center',
    borderWidth: constants.pixel,
    borderColor: constants.colors.lineColor,
  },

  innerContainer: {
    margin: 8,
    flexDirection: 'row',
  }
});
