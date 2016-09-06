/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Header from '../components/Header';
import PeopleListItem from '../components/listView/PeopleListItem';

export default class PeopleSeen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftIcon='angle-left'
          leftIconAction={()=>this.props.navigator.pop()}
          rightIcon='sort'
          rightIconAction={()=>this.props.navigator.pop()}
          title={this.props.title}>
        </Header>
        <PeopleListItem pressEvent={this._pressEvent.bind(this)}/>
        <PeopleListItem pressEvent={this._pressEvent.bind(this)}/>
        <PeopleListItem pressEvent={this._pressEvent.bind(this)}/>
        <PeopleListItem pressEvent={this._pressEvent.bind(this)}/>
      </View>
    );
  }

  _pressEvent() {

  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
