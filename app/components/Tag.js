/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import constants from '../common/constants';

let tags = [
	{name: '分類', color: 'rgba(241,18,18,0.63)'},
	{name: '夜', color: 'rgba(228,215,22,1)'},
	{name: '學', color: 'rgba(62,203,246,1)'},
	{name: '捷', color: 'rgba(193,12,230,1)'},
]

export default class Tag extends Component {
  render() {
    let tagsIndex = tags.findIndex((element, index, array) => {
      return element.name === this.props.text;
    });

    tagsIndex = (tagsIndex === -1 ? 0 : tagsIndex);

    return (
      <View style={styles.container}>
        <Text style={[styles.text, {color: tags[tagsIndex].color}]}>
          {
            tagsIndex === 0 ?
            this.props.text :
            tags[tagsIndex].name
          }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 5,
  },

  text: {
    fontSize: 11,
    borderWidth: 1,
    borderColor: constants.colors.lineColor,
    backgroundColor: '#aaa',
  }
});
