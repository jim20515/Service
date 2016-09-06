'use strict';

import React, {
  Component
} from 'react';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'

import Constants from '../../common/constants';
import Tag from '../../components/Tag';
import constants from '../../common/constants';

export default class ExchangeListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {...this.props};
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.innerContainer}
          onPress={this.state.pressEvent.bind(this)}>
          <Image
            style={styles.image}
            resizeMode={'contain'}
            source={{uri:'https://unsplash.it/600/400/?random'}}/>
          <View
            style={{ flex: 1 , marginLeft:10}}>
            <Text numberOfLines={1}
              style={{
                color: constants.colors.text5Color,
                fontSize: 16,
              fontFamily: 'Helvetica Neue',}}>
              六千牛肉湯
            </Text>
            <Text numberOfLines={5}
              style={{
                flex: 1,
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
              marginLeft:10,
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
});
