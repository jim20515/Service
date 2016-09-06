/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';

import Header from '../../components/Header';
import constants from '../../common/constants';
import Icon from '../../components/Icon';

export default class Feedback extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftIcon='angle-left'
          leftIconAction={()=>this.props.navigator.pop()}
          title={this.props.parentTitle}>
        </Header>
        <ScrollView>
          <View style={{marginLeft: 20, marginRight: 20}}>
            <View style={styles.titleStyle}>
              <Text style={styles.titleText}>
                有什麼問題呀
              </Text>
            </View>
            <TextInput
              style={{height: 200, borderColor: constants.colors.lineColor, borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              placeholder='麻煩你key一下...'
            />
            <TextInput
              style={{height: 100, borderColor: constants.colors.lineColor, borderWidth: 1, marginTop: 20}}
              onChangeText={(text) => this.setState({text})}
              placeholder='有照片的話可以幫我上傳一下...'
            />
            <View style={styles.titleStyle}>
              <Text style={styles.titleText}>
                *信箱：
              </Text>
            </View>
            <View style={styles.titleStyle}>
              <Text style={styles.titleText}>
                稱呼：
              </Text>
            </View>
            <View style={styles.titleStyle}>
              <Text style={styles.titleText}>
                發生時間
              </Text>
            </View>
            <View style={styles.titleStyle}>
              <Text style={styles.titleText}>
                電話：
              </Text>
            </View>
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

  titleText: {
    fontSize: 16,
    color: constants.colors.text3Color,
  },

  titleStyle: {
    height: 40,
    justifyContent: 'center'
  },

  text: {
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
