import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WeatherScreen from './components/WeatherScreen'
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
  Weather: WeatherScreen,
  ZipCode: ZipCodeScreen
 },{
  initialRouteName: 'Weather',
 })
export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
    );
  }
}