/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Home from './Components/Home/Home'
import Manage from './Components/Manage/Manage'
import Expense from './Components/Expense/Expense'
import Me from './Components/Me/Me'

let navigation = null;
const dataSource = [
  {name: 'home',tabPage:'Home',tabName:'首页',component: Home},
  {name: 'wpforms',tabPage:'Expense',tabName:'报销',component: Expense},
  {name: 'th-large',tabPage:'Manage',tabName:'管理',component: Manage},
  {name: 'user',tabPage:'Us',tabName:'我的',component: Me}
]

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    navigation = this.props.navigation;
    this.state = {selectedTab: 'Home'};
  }
  render() {
    let tabViews = dataSource.map((item, i) => {
      return (
          <TabNavigator.Item
            title={item.tabName}
            selected={this.state.selectedTab === item.tabPage}
            tabStyle={{alignSelf:'center'}}
            titleStyle={{color:'#999'}}
            selectedTitleStyle={{color:'#3bb4f2'}}
            renderIcon={()=><Icon size={22} color={'#999'} name={item.name} source={item.icon} />}
            renderSelectedIcon={() => <Icon size={22} color={'#3bb4f2'} name={item.name} source={item.icon} />}
            onPress = {() => {this.setState({selectedTab:item.tabPage})}}
            key={i}
            >
            <item.component  navigation={navigation} />
        </TabNavigator.Item>
      );
    })
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.container}>
          <TabNavigator tabBarStyle={{alignItems:'center', backgroundColor: '#fff'}}>
            {tabViews}
        </TabNavigator>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  tab_wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  page1: {
    flex: 1,
    backgroundColor: '#fff'
  },
  page2: {
    flex: 1,
    backgroundColor: '#eee'
  },
  image: {
    height: 22,
    width: 22
  }
});
