import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import fb from './screens/FaceBookScreen';
import insta from './screens/InstagramScreen'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}
const TabNavigator = createBottomTabNavigator({
  FaceBook : {screen:fb},
  Instagram : {screen:insta}
});

const AppContainer = createAppContainer(TabNavigator);
