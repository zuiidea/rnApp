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
  View
} from 'react-native';
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

class rnApp extends Component {
  render() {
    var navigationView = (<View style={{flex: 1, backgroundColor: '#fff'}}>
                            <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>Im in the Drawer!</Text>
                          </View>);
    return (
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
      </View>
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
