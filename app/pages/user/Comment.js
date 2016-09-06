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
import CommentListItem from '../../components/listView/CommentListItem';
import Demand from '../DemandDetail';

export default class Comment extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftIcon='angle-left'
          leftIconAction={()=>this.props.navigator.pop()}
          title={this.props.parentTitle}>
        </Header>
        <ScrollView>
          <CommentListItem
            onDemandPress={this._onDemandPress.bind(this)}
            onCommentPress={this._onCommentPress.bind(this)}/>
          <CommentListItem
            onDemandPress={this._onDemandPress.bind(this)}
            onCommentPress={this._onCommentPress.bind(this)}/>
          <CommentListItem
            onDemandPress={this._onDemandPress.bind(this)}
            onCommentPress={this._onCommentPress.bind(this)}/>
          <CommentListItem
            onDemandPress={this._onDemandPress.bind(this)}
            onCommentPress={this._onCommentPress.bind(this)}/>
          <CommentListItem
            onDemandPress={this._onDemandPress.bind(this)}
            onCommentPress={this._onCommentPress.bind(this)}/>
          <CommentListItem
            onDemandPress={this._onDemandPress.bind(this)}
            onCommentPress={this._onCommentPress.bind(this)}/>
          <CommentListItem
            onDemandPress={this._onDemandPress.bind(this)}
            onCommentPress={this._onCommentPress.bind(this)}/>
        </ScrollView>
      </View>
    );
  }

  _onDemandPress() {
    InteractionManager.runAfterInteractions(()=>{
      this.props.navigator.push({
        name: 'Demand',
        component: Demand,
        passProps: {
          type: 'normal',
        }
      })
    })
  }

  _onCommentPress() {
    InteractionManager.runAfterInteractions(()=>{
      this.props.navigator.push({
        name: 'Demand',
        component: Demand,
        passProps: {
          type: 'normal',
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
