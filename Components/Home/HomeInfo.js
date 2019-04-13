import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native'
import Swiper from 'react-native-swiper'

const sWidth = Dimensions.get('window').width;

export default class HomeInfo extends Component {
  render() {
    const imgUrl = require('../../resource/txt.png');
    return (
      <View style={styles.wrapper}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.left_wrapper}>
            <Image source={imgUrl} style={styles.img} />
            <Text style={{color: '#999'}}> | </Text>
            <Text style={styles.txt}>最新资讯</Text>
          </View>
          <View style={styles.right_wrapper}>
            <Swiper height={30}  horizontal={false} autoplay={true} showsPagination={false} >
              <View style={styles.slide}>
                <Text style={styles.text}>Hello Swiper</Text>
              </View>
              <View style={styles.slide}>
                <Text style={styles.text}>Beautiful</Text>
              </View>
            </Swiper>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 10,
    paddingLeft: 10,
    height: 40,
    flexDirection: 'row',
    width: sWidth - 20,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  right_wrapper: {
    flex: 1,
  },
  left_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txt: {
    padding: 3,
    fontSize: 10,
    borderColor: '#ffae1b',
    borderWidth: 1,
    color: '#ffae1b'
  },
  txt_b: {
    flex: 1,
  },
  img: {
    width: 60,
    height: 14,
    resizeMode: 'cover'
  },
  slide: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'center',
  },
  text: {
    color: '#333',
    fontSize: 12,
    textAlign: 'left'
  }
});