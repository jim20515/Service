/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  InteractionManager,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import SwiperModel from '../components/SwiperModel';
import Header from '../components/Header';
import constants from '../common/constants';
import Tag from '../components/Tag';
import {AngleRight} from '../components/Icon';
import PeopleSeenContainer from '../containers/PeopleSeenContainer';

export default class DemandDetail extends Component {
  render() {

    let iconSize = 30,
    iconColor = constants.colors.themeColor,
    iconStyles={width: 30}
    favoriteIcon = (this.props.isFavorited === true) ? 'heart' : 'heart-o';

    return (
      <View style={styles.container}>
        <Header
          leftIcon='angle-left'
          leftIconAction={()=>this.props.navigator.pop()}
          rightIcon={favoriteIcon}
          rightIconAction={()=>this.props.navigator.pop()}
          title={this.props.parentTitle}>
        </Header>
        <ScrollView>
          <SwiperModel />
          <View style={styles.headerCell}>
            <View style={{flex: 1}}>
              <Text style={[styles.text, {fontSize: 20}]}>六千牛肉湯</Text>
              <Text style={[styles.text, {marginTop: 10, flexWrap: 'wrap'}]}>大家想要吃美味的六千牛肉湯嗎？我排了
              一個小時唷，趕快跟我說我幫你買一碗</Text>
            </View>
            <View style={{width: 80, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: 'red', fontSize: 20}}>$1,000</Text>
            </View>
          </View>
          <View style={styles.cell}>
            <Icon style={iconStyles} name="clock-o" size={iconSize} color={iconColor}/>
            <Text style={[styles.text, {flex: 1}]}>Po文時間</Text>
            <Text style={[styles.text, {marginRight: 15}]}>2016/02/30 18:47:03</Text>
          </View>
          <View style={styles.cell}>
            <Text style={[styles.text, {flex: 1, paddingLeft: 30}]}>經過時間</Text>
            <Text style={[styles.text, {marginRight: 15}]}>30分鐘</Text>
          </View>
          <View style={styles.cell}>
            <Icon style={iconStyles} name="users" size={iconSize} color={iconColor}/>
            <Text style={[styles.text, {flex: 1}]}>排隊號碼</Text>
            <Text style={[styles.text, {marginRight: 15}]}>254號 目前號碼 234號</Text>
          </View>
          <View style={styles.cell}>
            <Icon style={iconStyles} name="map-marker" size={iconSize} color={iconColor}/>
            <Text style={[styles.text, {flex: 1}]}>新北市中和區員山路92巷5號</Text>
            <AngleRight />
          </View>
          <TouchableOpacity style={styles.cell} onPress={()=> {
            InteractionManager.runAfterInteractions(()=>{
              this.props.navigator.push({
                name: 'PeopleSeenContainer',
                component: PeopleSeenContainer,
                passProps: {
                  type: 'normal',
                  title: '看過的人'
                }
              })
            })
          }}>
            <Icon style={iconStyles} name="eye" size={iconSize} color={iconColor}/>
            <Text style={[styles.text, {flex: 1}]}>看過的人 / 有興趣</Text>
            <Text style={[styles.text, {fontSize: 16}]}>123</Text>
            <AngleRight />
          </TouchableOpacity>

          <View style={styles.cell}>
            <Text style={[styles.text, {flex: 1}]}>交易方式</Text>
            <Text style={[styles.text, {marginRight: 15}]}>面交</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.text}>分類方式</Text>
            <Tag text='排' />
            <Text style={styles.text}>排隊</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.text}>美食</Text>
          </View>
          <View style={styles.cell}>
            <Text style={styles.text}>篩選方式</Text>
            <Tag text='捷' />
            <Text style={[styles.text, {flex: 1}]}>捷運站</Text>
            <Text style={[styles.text, {marginRight: 15}]}>南勢角</Text>
          </View>
          <View style={styles.cell}>
            <Tag text='學' />
            <Text style={[styles.text, {flex: 1}]}>學校</Text>
            <Text style={[styles.text, {marginRight: 15}]}>國立政治大學</Text>
          </View>
          <View style={styles.cell}>
            <Tag text='夜' />
            <Text style={[styles.text, {flex: 1}]}>夜市</Text>
            <Text style={[styles.text, {marginRight: 15}]}>寧夏夜市</Text>
          </View>
          <View style={styles.cell}>
            <Text style={[styles.text, {flex: 1}]}>店家資訊：黃大衛</Text>
            <Icon style={iconStyles} name="angle-right" size={iconSize} color={iconColor}/>
          </View>
          <View style={styles.cell}>
            <View style={{alignItems: 'center', flex: 1}}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="shopping-basket" size={15} color={iconColor}/>
                <Text style={styles.text}>32</Text>
              </View>
              <View>
                <Text style={styles.text}>商品總數</Text>
              </View>
            </View>
            <View style={{
              alignItems: 'center',
              flex: 1,
              borderRightColor: '#ddd',
              borderLeftColor: '#ddd',
              borderRightWidth: 1,
            borderLeftWidth: 1}}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="credit-card" size={15} color={iconColor}/>
                <Text style={styles.text}>380</Text>
              </View>
              <View>
                <Text style={styles.text}>交易總數</Text>
              </View>
            </View>
            <View style={{alignItems: 'center', flex: 1}}>
              <View style={{flexDirection: 'row'}}>
                <Icon name="comments-o" size={15} color={iconColor}/>
                <Text style={styles.text}>32%</Text>
              </View>
              <View>
                <Text style={styles.text}>留言回應</Text>
              </View>
            </View>
          </View>
          <View style={styles.cell}>
            <View style={{flexDirection: 'row', flex:1}}>
              <Text style={styles.text}>評分：</Text>
              <Icon name="star" size={15} color={iconColor}/>
              <Icon name="star" size={15} color={iconColor}/>
              <Icon name="star" size={15} color={iconColor}/>
              <Icon name="star" size={15} color={iconColor}/>
              <Icon name="star-half-o" size={15} color={iconColor}/>
              <Text style={styles.text}>4.6分</Text>
            </View>
            <Text style={[styles.text, {marginRight: 15}]}>415人評分過</Text>
          </View>
          <View style={styles.cell}>
            <Icon style={iconStyles} name="credit-card" size={20} color={iconColor}/>
            <Text style={[styles.text, {flex: 1}]}>交易細節：254號</Text>
            <Text style={[styles.text, {marginRight: 15}]}>目前號碼 234號</Text>
          </View>
        </ScrollView>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerCell: {
    flexDirection: 'row',
    // alignItems: 'center',
    height: 100,
    borderColor: constants.colors.lineColor,
    borderBottomWidth: 1,
  },

  cell: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderColor: constants.colors.lineColor,
    borderBottomWidth: 1,
    marginLeft: 20,
  },

  icon: {
    width: 45,
    height: 45,
  },

  text: {
    color: constants.colors.text4Color,
    marginLeft: 10,

  }
});
