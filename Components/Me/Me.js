import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native'
import List from './List'

const sWidth = Dimensions.get('window').width
const imgUrl = require('../../resource/avatar.png')

export default class Me extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listOne: {
        hadBottom: true,
        list: [
          {
            txt: '修改密码',
            icon: 'ios-unlock',
            disabled: false,
            hasBd: true,
            id: 1
          },
          {
            txt: '常用旅客',
            icon: 'md-contacts',
            disabled: true,
            hasBd: true,
            id: 2
          },
          {
            txt: '开票信息',
            icon: 'md-document',
            disabled: false,
            hasBd: true,
            id: 3
          },
          {
            txt: '帮助中心',
            icon: 'ios-headset',
            disabled: false,
            hasBd: true,
            id: 4
          },
        ]
      },
      listTwo: {
        hadBottom: false,
        list: [
          {
            txt: '待付款',
            icon: 'md-wallet',
            disabled: false,
            hasBd: false,
            num: 12,
            id: 1
          },
          {
            txt: '待审批',
            icon: 'ios-time',
            disabled: false,
            hasBd: false,
            num: 6,
            id: 2
          },
          {
            txt: '退改',
            icon: 'ios-construct',
            disabled: true,
            hasBd: false,
            id: 3
          },
          {
            txt: '我的订单',
            icon: 'md-list-box',
            disabled: false,
            hasBd: false,
            id: 4
          },
        ]
      },
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.me_header}>
          <View style={styles.left}>
            <Image source={imgUrl} style={styles.img} />
          </View>
          <View style={styles.right}>
            <Text style={styles.txt}>苏大懒。</Text>
            <Text style={[styles.txt, styles.pd]}>test生产前台测试专用</Text>
          </View>
        </View>
        <ScrollView style={{flex: 1}}>
          <List listOption={this.state.listOne} />
          <List listOption={this.state.listTwo} />
        </ScrollView>
      </View>
    )
  }

}

const styles = StyleSheet.create({ 
  wrapper: {
    flex: 1
  },
  me_header: {
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height: 110,
    backgroundColor: '#3c91ca'
  },
  left: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: 'red'
  },
  right: {
    marginLeft: 20
  },
  txt: {
    color: '#FFF'
  },
  pd: {
    marginTop: 5
  },
  img: {
    width: 60,
    height: 60,
    resizeMode: 'cover'
  }
})