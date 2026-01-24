import React, {useContext}from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from "@react-native-community/async-storage"

import {UserContext} from './contexts/UserContext'

import Vagas from './screens/Vagas';
import Agenda from './screens/Agenda';
import Profile from './screens/Profile';
import PatientManager from './screens/PatientManager'

const Tab = createBottomTabNavigator();



function MainTab({navigation}) {
  const { data:user } = useContext(UserContext);
  return(
    <Tab.Navigator screenOptions={{
      tabBarStyle: { backgroundColor: "#fff", height:60 },
      tabBarInactiveTintColor:'#888',
      tabBarActiveTintColor:"#e77",
       }} //initialRouteName="Perfil" 
       >

      <Tab.Screen name='Perfil' component={Profile} 
      options={{tabBarIcon:({color})=>(<MaterialCommunityIcons name="account" color={color} size={26} />)}} />

      <Tab.Screen name='Agenda' component={Agenda} 
      options={{tabBarIcon:({color})=>(<MaterialCommunityIcons name="calendar-account" color={color} size={26} />)}} />

      <Tab.Screen name='Vagas' component={Vagas} 
      options={{tabBarIcon:({color})=>(<MaterialCommunityIcons name="calendar-edit" color={color} size={26} />)}} />

      <Tab.Screen name='Usuarios' component={PatientManager} 
      options={{tabBarIcon:({color})=>(<MaterialCommunityIcons name="account-edit" color={color} size={26} />)}} />

    </Tab.Navigator>
  );
}
//{ user.doc === user.name ? }
// account-edit
export default MainTab;
