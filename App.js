import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import Dailypic from './screens/Dailypic'
import Spacecrafts from './screens/Spacecrafts'
import StarMap from './screens/StarMap'
import Home from './screens/Home'

const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home" screenOptions = {{headerShown:false}}>
        <Stack.Screen name = "Home" component = {Home} />
        <Stack.Screen name = "Spacecrafts" component = {Spacecrafts} />
        <Stack.Screen name = "Dailypic" component = {Dailypic} />
        <Stack.Screen name = "StarMap" component = {StarMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}