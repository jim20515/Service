/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  InteractionManager
} from 'react-native';

import Header from '../../components/Header';
import DemandListItem from '../../components/listView/DemandListItem';
import DemandDetailContainer from '../../containers/DemandDetailContainer';

export default class Recent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftIcon='angle-left'
          leftIconAction={()=>this.props.navigator.pop()}
          title={this.props.parentTitle}>
        </Header>
        <ScrollView>

          <DemandListItem pressEvent={this._onPress.bind(this)} />
          <DemandListItem pressEvent={this._onPress.bind(this)} />
          <DemandListItem pressEvent={this._onPress.bind(this)} />
          <DemandListItem pressEvent={this._onPress.bind(this)} />
          <DemandListItem pressEvent={this._onPress.bind(this)} />
          <DemandListItem pressEvent={this._onPress.bind(this)} />
          <DemandListItem pressEvent={this._onPress.bind(this)} />
          <DemandListItem pressEvent={this._onPress.bind(this)} />
        </ScrollView>
      </View>
          );
  }

  _onPress() {
    InteractionManager.runAfterInteractions(()=>{
        this.props.navigator.push({
            name: 'DemandDetailContainer',
            component: DemandDetailContainer,
            passProps: {
                type: 'normal'
            }
        })
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
