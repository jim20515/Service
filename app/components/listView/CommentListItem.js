/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import constants from '../../common/constants';
import Icon from '../Icon';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Tag from '../../components/Tag';

export default class CommentListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {...this.props};
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.state.onDemandPress.bind(this)}
          style={styles.innerContainer}>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={{uri:'https://unsplash.it/600/400/?random'}}/>
          <View style={{flex: 1, marginLeft: 10}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Text numberOfLines={1}
                  style={{
                    color: constants.colors.text5Color,
                    fontSize: 16,
                  fontFamily: 'Helvetica Neue',}}>
                  六千牛肉湯
                </Text>
                <Text numberOfLines={5}
                  style={{
                    color: constants.colors.text3Color,
                  fontSize: 12}}>
                  大家想吃美味的六千牛肉湯嗎？我排了一個小時喔
                </Text>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                  <Tag text='排' />
                  <Tag text='夜' />
                  <Tag text='學' />
                  <Tag text='捷' />
                </View>
              </View>
              <View
                style={{
                  marginTop: 4,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <Text
                  style={{
                    color: "rgba(26,205,230,1)",
                    fontSize: 14,
                    borderWidth: 1,
                    borderColor: "rgba(26,205,230,1)",
                    borderRadius: 10,
                    padding: 5,
                  }}>
                  新北市
                </Text>
                <Text
                  style={{
                    color: "rgba(255,0,0,1)",
                    fontSize:  20 ,
                    fontWeight: 'normal',
                    fontFamily: 'Helvetica Neue',
                    height: 50,
                    paddingTop: 20,
                  }}>
                  $1,000
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.comment} onPress={this.state.onCommentPress.bind(this)}>
          <Text numberOfLines={1}
            style={{color: constants.colors.text3Color, flex: 1}}>
            我的留言：這一家是否有很多人
          </Text>
          <Icon.AngleRight />
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomWidth: constants.pixel,
    borderBottomColor: constants.colors.lineColor,
    marginLeft: 20,
    padding: 5
  },

  innerContainer: {
    flexDirection: 'row',
  },

  image: {
    width: 120,
    height: 100,
    borderWidth: 1,
    borderColor: constants.colors.borderColor,
    marginTop: 5,
  },

  comment: {
    marginLeft: 120 + 10,
    flexDirection: 'row',
    borderTopColor: constants.colors.lineColor,
    borderTopWidth: 1,
    alignItems: 'center'
  }
});
