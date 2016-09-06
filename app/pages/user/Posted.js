/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  InteractionManager,
  ScrollView
} from 'react-native';

import Header from '../../components/Header';
import DemandListItem from '../../components/listView/DemandListItem';
import DemandDetail from '../../pages/DemandDetail';

export default class Posted extends Component {
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
            name: 'DemandDetail',
            component: DemandDetail,
            passProps: {
                type: 'normal',
                isFavorited: true
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
