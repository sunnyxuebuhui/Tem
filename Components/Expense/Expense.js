import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const sWidth = Dimensions.get('window').width
const imgUrl = require('../../resource/head.0999093.png')

export default class Expense extends Component {
  constructor(props) {
    super(props),
    this.state = {
    }
  }

  render() {
    return (
      <ScrollView style={styles.wrapper}>
        <Image source={imgUrl} style={styles.img} />
        <View>
          <View style={styles.list_item}>
            <View style={styles.flex}>
              <FontAwesome5 name={'money-bill'} size={16} color={'#389aff'} />
              <Text style={styles.txt}>我的报销</Text>
            </View>
            <Icon name={'angle-right'} size={16} color={'#999'} />
          </View>
          <View style={styles.list_item}>
            <View style={styles.flex}>
              <FontAwesome5 name={'money-bill-alt'} size={16} color={'#389aff'} />
              <Text style={styles.txt}>随手记</Text>
            </View>
            <Icon name={'angle-right'} size={16} color={'#999'} />
          </View>
          <View style={[styles.list_item, styles.md]}>
            <View style={styles.flex}>
              <FontAwesome5 name={'money-check'} size={16} color={'#389aff'} />
              <Text style={styles.txt}>财务审核</Text>
            </View>
            <Icon name={'angle-right'} size={16} color={'#999'} />
          </View>
          <View style={styles.list_item}>
            <View style={styles.flex}>
              <FontAwesome5 name={'money-check-alt'} size={16} color={'#389aff'} />
              <Text style={styles.txt}>出纳付款</Text>
            </View>
            <Icon name={'angle-right'} size={16} color={'#999'} />
          </View>
        </View>
      </ScrollView>
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
  },
  img: {
    width: sWidth,
    height: 120,
    resizeMode: 'cover'
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
  },
  txt: {
    marginLeft: 10
  },
  list_item: {
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    backgroundColor: '#fff'
  },
  md: {
    marginTop: 10
  }
})