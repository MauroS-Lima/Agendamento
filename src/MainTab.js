import React, {useContext}from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


import {UserContext} from './contexts/UserContext'

import Home from './screens/Home';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();



function MainTab({navigation}) {
  const{state=user} = useContext(UserContext);
  return(
    <Tab.Navigator screenOptions={{
      tabBarStyle: { backgroundColor: "#4EADBE", height:60 },import React, {useContext}from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from "@react-native-community/async-storage"

import {UserContext} from './contexts/UserContext'

import Home from './screens/Home';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();



function MainTab({navigation}) {
  const{state=user} = useContext(UserContext);
  return(
    <Tab.Navigator screenOptions={{
      tabBarStyle: { backgroundColor: "#fff", height:60 },
      tabBarInactiveTintColor:'#888',
      tabBarActiveTintColor:"#e77",
       }} //initialRouteName="Profile"
       >

      <Tab.Screen name='Home' component={Home} 
      options={{tabBarIcon:({color})=>(<MaterialCommunityIcons name="home" color={color} size={26} />)}} />

      <Tab.Screen name='Profile' component={Profile} 
      options={{tabBarIcon:({color})=>(<MaterialCommunityIcons name="account" color={color} size={26} />)}} />

    </Tab.Navigator>
  );
}

export default MainTab;
      tabBarInactiveTintColor:'#888',
      tabBarActiveTintColor:"#e77",
       }}>

      <Tab.Screen name='Home' component={Home} 
      options={{tabBarIcon:({color})=>(<MaterialCommunityIcons name="home" color={color} size={26} />)}} />

      <Tab.Screen name='Profile' component={Profile} 
      options={{tabBarIcon:({color})=>(<MaterialCommunityIcons name="account" color={color} size={26} />)}} />

    </Tab.Navigator>
  );
}

export default MainTab;
