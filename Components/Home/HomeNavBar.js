import React, { Component } from 'react'
import { View, Image, StyleSheet, Dimensions, Text, ImageBackground } from 'react-native'

const imgUrl = require('../../resource/banner.jpg')
const bgUrl = require('../../resource/bg.png')
const sWidth = Dimensions.get('window').width;

export default class HomeNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
   
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.task}><Text style={styles.textS}>您暂无待办事项</Text></View>
        <Image source={imgUrl} style={styles.img} />
        <ImageBackground source={bgUrl} style={styles.bg}>
          <View style={styles.tabWrapper}>
            <View style={styles.tabL}><Text style={styles.text}>差旅计划</Text></View>
            <View style={styles.tabC}>
              <View style={styles.fls}><Text style={styles.text}>飞机</Text></View>
              <View style={styles.fl}><Text style={styles.text}>酒店</Text></View>
            </View>
            <View style={styles.tabR}>
              <View style={styles.fls}><Text style={styles.text}>火车</Text></View>
              <View style={styles.fl}><Text style={styles.text}>用车</Text></View>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 251,
    justifyContent: 'center',
    alignItems: 'center'
  },
  task: {
    position: 'absolute',
    top: 24,
    right: 'auto',
    left: 'auto',
    width: 240,
    height: 26,
    alignItems: 'center',
    zIndex: 2,
    justifyContent:'center',
    flexDirection:'row',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'transparent',
    backgroundColor: 'rgba(0, 0, 0, .2)'

  },
  img: {
    width: sWidth, 
    height: 200, 
    resizeMode: 'cover'
  },
  bg: {
    flex: 1,
    width: sWidth - 20,
    height: 100, 
    borderWidth: 1,
    borderRadius: 15,
    marginTop: -51,
    overflow:'hidden',
    borderColor: 'transparent'
  },
  tabWrapper: {
    flex: 1,
    flexDirection: 'row',
    width: sWidth - 20,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'transparent'
  },
  tabL: {
    flex: 1,
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1,
    borderStyle: "solid",
    borderRightColor: "#fff"
  },
  tabC: {
    flex: 1,
    height: 100,
    borderRightWidth: 1,
    borderStyle: "solid",
    borderRightColor: "#fff"
  },
  tabR: {
    flex: 1,
    height: 100,
  },
  textS: {
    color: '#fff', 
    fontSize: 12,
    fontWeight: 'bold'
  },
  text: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold'
  },
  fl: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fls: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderStyle: "solid",
    borderBottomColor: "#fff"
  }
});