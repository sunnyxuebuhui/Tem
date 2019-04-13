import React, { Component } from 'react'
import { View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native'
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import momentLocale from 'moment/locale/zh-cn';
import TravelPlanData from './TravelPlan.json'
import * as filters from '../../libs/filters'
moment.updateLocale('zh-cn', momentLocale);

const sWidth = Dimensions.get('window').width;

export default class TravelPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      travelList: []
    };
  }

  componentWillMount() {
    this.setState({
      travelList: this._normaliziArrList(TravelPlanData)
    })
  }

  /**
   * 初始化转换后台数据结构
   * @param {*} arr 
   */
  _normaliziArrList(arr) {
    if (arr.length === 0) return []
    let map = {}, rs = [];
    arr.forEach((item, index) => {
      if (item.travelItemForm && item.travelItemForm.travelReason) {
        if (!map[item.travelItemForm.travelReason]) {
          map[item.travelItemForm.travelReason] = []
        }
        map[item.travelItemForm.travelReason].push(item)
      } else {
        if (!map[index]) map[index] = item
      }
    });
    rs = Object.values(map)
    rs.forEach(item => item.length > 0 ? item.sort(this._sortList) : item)
    return rs.sort(this._sortList)
  }

  _sortList(A, B) {
    return +moment(A.length > 1 ? A[0].fDate : A.fDate)  - +moment(B.length > 1 ? B[0].fDate : B.fDate) > 0 ? 1 : -1
  }

  switchType(type) {
    switch (type) {
      case 'UNKNOW':
        return <Entypo style={{flex:1,justifyContent: 'space-between'}} name={'location-pin'} size={16} color={'#92a9b9'} /> 
      case 'FLIGHT':
        return <MaterialIcons name={'flight'} size={16} color={'#92a9b9'} /> 
      case 'INTERNATIONAL_FLIGHT':
        return <MaterialIcons name={'flight'} size={16} color={'#92a9b9'} /> 
      case 'HOTEL':
        return <FontAwesome5 name={'hotel'} size={16} color={'#92a9b9'} />
      case 'TRAIN':
        return <MaterialCommunityIcons name={'train'} size={16} color={'#92a9b9'} /> 
      case 'TAXI':
        return <MaterialCommunityIcons name={'car'} size={16} color={'#92a9b9'} />
      default:
        return <Entypo name={'location-pin'} size={16} color={'#92a9b9'} /> 
    }
  }
  switchCode(code) {
    switch (code) {
      case 1:
        return <MaterialIcons name={'flight'} size={16} color={'#92a9b9'} />  
      case 2:
        return <FontAwesome5 name={'hotel'} size={16} color={'#92a9b9'} />
      case 3:
        return <MaterialCommunityIcons name={'train'} size={16} color={'#92a9b9'} /> 
      case 0:
        return <MaterialCommunityIcons name={'car'} size={16} color={'#92a9b9'} />
      default:
        return <Entypo name={'location-pin'} size={16} color={'#92a9b9'} /> 
    }
  }

  domRender(dom, i, mode = 0) {
    return dom.orderType == 4 ? ( 
                                  <View key={`${dom.orderId}${i}`}>
                                    <View style={i == 0 && mode == 1 ? styles.show : styles.hiden}>
                                      <View style={styles.l}><Text>{dom.travelItemForm ? dom.travelItemForm.travelReason : ''}</Text></View>
                                      <Icon name={'angle-right'} size={24} color={'#ccc'} />
                                    </View>
                                    <View style={styles.flex_wrapper}>
                                      <View style={styles.flex_row}>
                                        <Text style={styles.flex_time}>{filters.filterMMDD(dom.fDate)}</Text>
                                        <Text style={styles.gray}>{filters.filterWeek(dom.fDate)}</Text>
                                        <Text style={styles.icon}>{this.switchType(dom.travelMode)}</Text>
                                        <Text style={styles.flex_city}>{dom.travelMode == 'HOTEL' ? `${dom.fromCity}酒店` : `${dom.fromCity} — ${dom.toCity}`}</Text>
                                      </View>
                                      <Text style={styles.flex_btn}>预定</Text>
                                    </View> 
                                  </View>
                                ) 
                              : dom.orderType == 2 ?  ( <Text key={`${dom.orderId}${i}`}>333</Text> ) 
                              : (
                                  <View key={`${dom.orderId}${i}`}>
                                    <View style={i == 0 && mode == 1 ? styles.show : styles.hiden}>
                                      <Text>{dom.travelItemForm ? dom.travelItemForm.travelReason : ''}</Text>
                                    </View>
                                    <View style={styles.f_t_wrapper} >
                                      <View style={styles.flex_row}>
                                        <Text style={styles.flex_time}>{filters.filterMMDD(dom.fDate)}</Text>
                                        <Text style={styles.gray}>{filters.filterWeek(dom.fDate)}</Text>
                                        <Text style={styles.icon}>{this.switchCode(dom.orderType)}</Text>
                                        <Text style={styles.flex_city}>{dom.fromCity} — {dom.toCity}</Text>
                                        <Text style={styles.name}>{dom.name}</Text>
                                      </View>
                                      <View style={styles.from}>
                                        <Text style={styles.txt}>{dom.orderType == 1 ? '起' : '发'}</Text>
                                        <Text>{filters.filterHHMM(dom.fDate)}</Text>
                                        <Text style={styles.place}>{dom.fromPlace}{dom.fromTerminal}</Text>
                                      </View>
                                      <View style={styles.from}>
                                        <Text style={styles.txt}>{dom.orderType == 1 ? '降' : '到'}</Text>
                                        <Text>{filters.filterHHMM(dom.tDate)}</Text>
                                        <Text style={styles.place}>{dom.toPlace}{dom.toTerminal}</Text>
                                      </View>
                                    </View>
                                  </View>
                                )
  }         

  render() {
    return (
      <ScrollView style={styles.scroll_wrapper}>
        {this.state.travelList.map((item, index) => {
          return (
            <View style={styles.wrapper} key={`${item.orderId}${index}`}>
              {item.length > 1 ? <View style={styles.group}>{item.map((v, i) => (
                 this.domRender(v, i, 1)
              ))}</View> : this.domRender(item, index)}
            </View>
          )
        })}
      </ScrollView>
    )
  }


}

const styles = StyleSheet.create({
  scroll_wrapper: {
    marginTop: 7,
    flex: 1,
    width: sWidth - 20,
  },
  wrapper: {
    flex: 1,
  },
  f_t_wrapper: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    marginBottom: 7,
    height: 90,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 10,
  },
  flex_wrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#eee',
    borderTopWidth: 1,
    backgroundColor: '#fff'
  },
  group: {
    height: 'auto',
    width: 'auto',
    borderColor: '#eee',
    borderWidth: 1,
    marginBottom: 7,
    borderRadius: 10,
    overflow: 'hidden'
  },
  flex_row: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  show: {
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff'
  },
  hiden: {
    display: 'none'
  },
  txt: {
    marginRight: 6,
    width: 28,
    color: '#92a9b9',
    fontSize: 12
  },
  from: {
    marginLeft: 79,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  place: {
    marginLeft: 6,
    color: '#999',
    fontSize: 12,
  },
  icon: {
    marginRight: 6,
    width: 28,
    fontSize: 12,
    color: '#92a9b9',
  },
  flex_time: {
    fontSize: 14,
    width: 40,
    color: '#333'
  },
  name: {
    marginLeft: 6,
    color: '#999',
    fontSize: 12,
  },
  gray: {
    marginLeft: 6,
    marginRight: 6,
    width: 25,
    color: '#999',
    fontSize: 10,
  },
  flex_btn: {
    paddingLeft: 7,
    paddingRight: 7,
    paddingBottom: 4,
    paddingTop: 4,
    color: '#fea400',
    borderColor: '#fea400',
    borderWidth: 1,
    borderRadius: 9,
    fontSize: 12,
  }
})