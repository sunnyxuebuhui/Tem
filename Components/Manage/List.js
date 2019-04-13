import React, { Component } from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const sWidth = Dimensions.get('window').width;

export default class List extends Component {
  constructor(props) {
    super(props),
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        {this.props.listOption && this.props.listOption.title ?  (
          <View style={styles.title}><Text >{this.props.listOption.title}</Text></View>
        ) : null}
        <View style={styles.list_wrapper}>
          {this.props.listOption.list.length && this.props.listOption.list.map((item, key) => (
            <View key={item.id} style={[item.hasBd && (key +1) % 4 !== 0  ? styles.item_bd : styles.item, item.disabled ? 'gray' : null]}>
              <Ionicons name={item.icon} size={24} color={item.disabled ? '#ccc' : '#389aff'}></Ionicons>
              <Text style={item.disabled ? styles.txt : styles.acTxt}>{item.txt}</Text>
            </View>
          ))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
    height: 'auto',
    width: sWidth,
    justifyContent: 'space-between',
    backgroundColor: '#fff'
  },
  title: {
    height: 44,
    paddingLeft: 10,
    justifyContent: 'center',
    fontSize: 16,
    textAlign: 'left',
    color: '#333',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  list_wrapper: {
    width: sWidth,
    height: 'auto',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: 'row',
  },
  txt: {
    color: '#ccc',
    paddingTop: 6
  },
  acTxt: {
    color: '#333',
    paddingTop: 6
  },
  item: {
    justifyContent: 'center',
    width: sWidth / 4,
    height: 100,
    alignItems: 'center',
  },
  item_bd: {
    borderStyle: "solid",
    borderRightWidth: 1,
    borderRightColor: '#eee',
    justifyContent: 'center',
    width: sWidth / 4,
    height: 100,
    alignItems: 'center',
  },
  gray: {
    backgroundColor: '#ccc'
  }
})