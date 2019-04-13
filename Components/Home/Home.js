import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import HomeNavBar from '../Home/HomeNavBar'
import HomeInfo from './HomeInfo'
import TravelPlan from './TravelPlan'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        <HomeNavBar />
        <HomeInfo />
        <TravelPlan />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
  },
})
