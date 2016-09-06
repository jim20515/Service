/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  InteractionManager,
  ScrollView
} from 'react-native';

import Category from '../components/Category';
import DemandListItem from '../components/listView/DemandListItem';
import SearchHeader from '../components/SearchHeader'
import DemandDetailContainer from '../containers/DemandDetailContainer';

export default class Demand extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SearchHeader
          searchAction={()=>{
            InteractionManager.runAfterInteractions(()=>{
              this.props.navigator.push({
                name: 'Search',
                component: DemandDetailContainer,
                passProps: {
                  type: 'normal'
                }
              })
            })
          }}
          scanAction={()=>alert('還沒想到')}
        />
        <ScrollView>
          <Category />
          <DemandListItem pressEvent = {this._pressEvent.bind(this)}/>
          <DemandListItem pressEvent = {this._pressEvent.bind(this)}/>
          <DemandListItem pressEvent = {this._pressEvent.bind(this)}/>
          <DemandListItem pressEvent = {this._pressEvent.bind(this)}/>
          <DemandListItem pressEvent = {this._pressEvent.bind(this)}/>
          <DemandListItem pressEvent = {this._pressEvent.bind(this)}/>
          <DemandListItem pressEvent = {this._pressEvent.bind(this)}/>
        </ScrollView>
      </View>
    );
  }

  _pressEvent() {
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
    // flex: 1,
  },
});
