/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Header from '../../components/Header';
import constants from '../../common/constants';
import TransactionListItem from '../../components/listView/TransactionListItem';

export default class Transaction extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftIcon='angle-left'
          leftIconAction={()=>this.props.navigator.pop()}
          rightIcon='sort'
          rightIconAction={()=>this.props.navigator.pop()}
          title={this.props.parentTitle}>
        </Header>
        <View style={[styles.innerContainer, {height: 50}]}>
          <TouchableOpacity style={{alignItems: 'center', flex: 1}}>
            <Text style={styles.text}>320</Text>
            <Text style={styles.text}>交易成功</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            alignItems: 'center',
            flex: 1,
            borderRightColor: '#ddd',
            borderLeftColor: '#ddd',
            borderRightWidth: 1,
          borderLeftWidth: 1}}>
            <Text style={styles.text}>8</Text>
            <Text style={styles.text}>交易失敗</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems: 'center', flex: 1}}>
            <Text style={styles.text}>14%</Text>
            <Text style={styles.text}>全部</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <TransactionListItem pressEvent = {this._pressEvent.bind(this)}/>
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
    fontSize: 16,
    color: constants.colors.text3Color,
  },
});
