import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { StyleSheet } from "react-native";

import Home from './screens/Home';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();



function MainTab({navigation}) {
  return(
     <Tab.Navigator>
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Profile' component={Profile}/>
    </Tab.Navigator>
  );
}

export default MainTab;
