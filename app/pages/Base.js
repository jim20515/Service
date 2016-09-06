/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Header from '../components/Header';

export default class Base extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftIcon='angle-left'
          leftIconAction={()=>this.props.navigator.pop()}
          title={this.props.parentTitle}>
        </Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
