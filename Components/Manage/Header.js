import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const sWidth = Dimensions.get('window').width;

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  

  render() {
    return (
      <View style={styles.header_wrapper}>
        <Text>{this.props.headerOptions.leftIcon ? <Icon name={'angle-left'} size={24} color={'#fff'} /> : ''}</Text>
        <Text style={styles.txt}>{this.props.headerOptions.centerTitle}</Text>
        <Text>{this.props.headerOptions.rightIcon ? <Icon name={'angle-right'} size={24} color={'#fff'} /> : ''}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header_wrapper: {
    paddingRight: 15,
    paddingLeft: 15,
    height: 44,
    width: sWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#3c91ca'
  },
  txt: {
    color: '#fff',
    fontSize: 16,
  }
})