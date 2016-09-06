/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  InteractionManager,
  ScrollView
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from '../components/Icon';
import constants from '../common/constants';
import CommentContainer from '../containers/user/CommentContainer';
import FavoriteContainer from '../containers/user/FavoriteContainer';
import PostedContainer from '../containers/user/PostedContainer';
import TransactionContainer from '../containers/user/TransactionContainer';
import RecentContainer from '../containers/user/RecentContainer';
import ExchangeContainer from '../containers/user/ExchangeContainer';
import DemandContainer from '../containers/DemandContainer';
import Feedback from '../pages/user/Feedback';
import Setting from '../pages/user/Setting';

export default class User extends Component {
  render() {

    let theme = constants.colors.themeColor;
    return (
      <ScrollView style={styles.container}>
        <View style={[styles.innerContainer, {height: 100, paddingLeft: 30}]}>
          <View style={styles.mugShotView}>
            <FontAwesome style={{width: 30}} name="user" size={30} color={theme} />
          </View>
          <Text style={[styles.text, {marginLeft: 15, flex: 1}]}>
            黃鈺峻
          </Text>
        </View>
        <View style={[styles.innerContainer, {height: 70}]}>
          <TouchableOpacity style={{alignItems: 'center', flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <FontAwesome name="shopping-basket" size={15} color={theme}/>
              <Text style={styles.text}>32</Text>
            </View>
            <Text style={styles.text}>我的金幣</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            alignItems: 'center',
            flex: 1,
            borderRightColor: '#ddd',
            borderLeftColor: '#ddd',
            borderRightWidth: 1,
          borderLeftWidth: 1}}>
            <View style={{flexDirection: 'row'}}>
              <FontAwesome name="credit-card" size={15} color={theme}/>
              <Text style={styles.text}>380</Text>
            </View>
            <Text style={styles.text}>我的積分</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems: 'center', flex: 1}}>
            <View style={{flexDirection: 'row'}}>
              <FontAwesome name="comments-o" size={15} color={theme}/>
              <Text style={styles.text}>32</Text>
            </View>
            <Text style={styles.text}>我的等級</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.cell} onPress={this._pressCell.bind(this, FavoriteContainer, 'Favorite', undefined)}>
          <Text style={styles.cellText}>
            我的收藏
          </Text>
          <Icon.AngleRight />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell} onPress={this._pressCell.bind(this, CommentContainer, 'Comment', undefined)}>
          <Text style={styles.cellText}>
            我的留言
          </Text>
          <Icon.AngleRight />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell} onPress={this._pressCell.bind(this, PostedContainer, 'Posted', undefined)}>
          <Text style={styles.cellText}>
            我的Po文
          </Text>
          <Icon.AngleRight />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell} onPress={this._pressCell.bind(this, TransactionContainer, 'Transaction', undefined)}>
          <Text style={styles.cellText}>
            交易記錄
          </Text>
          <Icon.AngleRight />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell} onPress={this._pressCell.bind(this, ExchangeContainer, 'Exchange', undefined)}>
          <Text style={styles.cellText}>
            我的兌換
          </Text>
          <Icon.AngleRight />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell}>
          <Text style={styles.cellText}>
            找尋朋友
          </Text>
          <Icon.AngleRight />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell} onPress={this._pressCell.bind(this, RecentContainer, 'Recent', undefined)}>
          <Text style={styles.cellText}>
            最近瀏覽
          </Text>
          <Icon.AngleRight />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell} onPress={this._pressCell.bind(this, Feedback, 'Feedback', undefined)}>
          <Text style={styles.cellText}>
            提報問題
          </Text>
          <Icon.AngleRight />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cell} onPress={this._pressCell.bind(this, Setting, 'Setting', undefined)}>
          <Text style={styles.cellText}>
            設定
          </Text>
          <Icon.AngleRight />
        </TouchableOpacity>
      </ScrollView>
    );
  }

  _pressCell(component, name, passData) {

    InteractionManager.runAfterInteractions(()=>{
      this.props.navigator.push({
        name: name,
        component: component,
        passProps: {...passData}
      })
    })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingBottom: constants.commonValue.tabBarHeight
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: constants.colors.text2Color,
    borderBottomWidth: 1,
  },
  mugShotView: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: constants.colors.text2Color,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    color: constants.colors.text3Color,
  },
  cell: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: constants.colors.text2Color,
    borderBottomWidth: 1,
    height: 50,
    marginLeft: 40,
  },
  cellText: {
    fontSize: 16,
    color: constants.colors.text3Color,
    flex: 1,
  }
});
