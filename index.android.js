/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  ActivityIndicator,
  DrawerLayoutAndroid,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  ListView,
  View
} from 'react-native';
import MyScene from './android/component/MyScene.js';
import Button from 'react-native-button';
const TimerMixin = require('react-timer-mixin');

const ToggleAnimatingActivityIndicator = React.createClass({
  mixins: [TimerMixin],

  getInitialState() {
    return {
      animating: true,
    };
  },

  setToggleTimeout() {
    this.setTimeout(() => {
      this.setState({animating: !this.state.animating});
      this.setToggleTimeout();
    }, 2000);
  },

  componentDidMount() {
    this.setToggleTimeout();
  },

  render() {
    return (
      <ActivityIndicator
        animating={this.state.animating}
        style={[styles.centering, {height: 80}]}
        size="large"
      />
    );
  }
});

class ListViewBasics extends Component {
  // 初始化模拟数据
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  render() {
    return (
      <View style={{paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

class YoDawgApp extends Component {
  render() {
    return (
      <MyScene />
    )
  }
}

class rnApp extends Component {
  render() {
  fetch('http://api.map.baidu.com/telematics/v3/weather?location=%E6%88%90%E9%83%BD&output=json&ak=HQdwuP5YY3Gy8WaaGTOG0TsNFC4CeqoI', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         firstParam: 'yourValue',
         secondParam: 'yourOtherValue',
       })
      }).then(function(response) {
        console.log(response);
        console.log("4444");
      })
    var navigationView = (<View style={{flex: 1, backgroundColor: '#fff'}}>
                            <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Im in the Drawer!</Text>
                          </View>);
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>
          ActivityIndicator
        </Text>
        <ToggleAnimatingActivityIndicator />
        <Text style={styles.title}>
        Image
        </Text>
        <Image
        style={styles.logo}
        source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}}
        />
        <Text style={styles.title}>
          DrawerLayoutAndroid
        </Text>
        <DrawerLayoutAndroid
          drawerWidth={300}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={() => navigationView}>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
              <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
            </View>
        </DrawerLayoutAndroid>
        <Text style={styles.title}>
          ListView
        </Text>
        <ListViewBasics/>
        <Text style={styles.title}>
          Button66
        </Text>
        <Button>按钮6</Button>
        <MyScene/>
      </View>
      </ScrollView>
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
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  logo:{
    width:100,
    height:100,
  }
});

AppRegistry.registerComponent('rnApp', () => rnApp);
