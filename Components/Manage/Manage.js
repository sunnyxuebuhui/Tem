import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import Header from './Header'
import List from './List'

const sWidth = Dimensions.get('window').width;

export default class Manage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headerOptions: {
        centerTitle: '管理',
        leftIcon: false,
        rightIcon: false
      },
      listApplyOption: {
        title: '审批管理',
        list: [
          {
            txt: '待处理',
            icon: 'md-time',
            disabled: false,
            hasBd: false,
            id: 1
          },
          {
            txt: '已处理',
            icon: 'ios-archive',
            disabled: false,
            hasBd: false,
            id: 2
          },
        ]
      },
      listAnalyzeOption: {
        title: '综合分析',
        list: [
          {
            txt: '节支排行',
            icon: 'md-stats',
            disabled: false,
            hasBd: true,
            id: 1
          },
          {
            txt: '团队行程',
            icon: 'md-pin',
            disabled: true,
            hasBd: true,
            id: 2
          },
          {
            txt: '节省损失',
            icon: 'logo-ionitron',
            disabled: true,
            hasBd: true,
            id: 3
          },
          {
            txt: '违规统计',
            icon: 'md-warning',
            disabled: true,
            hasBd: true,
            id: 4
          },
        ]
      },
      listSearchOption: {
        title: '信息查询',
        list: [
          {
            txt: '计划',
            icon: 'md-clipboard',
            disabled: true,
            hasBd: true,
            id: 1
          },
          {
            txt: '订单',
            icon: 'md-list-box',
            disabled: true,
            hasBd: true,
            id: 2
          },
          {
            txt: '违规',
            icon: 'md-warning',
            disabled: true,
            hasBd: true,
            id: 3
          },
          {
            txt: '报销',
            icon: 'md-wallet',
            disabled: true,
            hasBd: true,
            id: 4
          },
        ]
      }
      
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Header headerOptions={this.state.headerOptions} />
        <ScrollView style={styles.scroll_wrapper}>
          <List listOption={this.state.listApplyOption} />
          <List listOption={this.state.listAnalyzeOption} />
          <List listOption={this.state.listSearchOption} />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  scroll_wrapper: {
    flex: 1,
    width: sWidth
  }
})