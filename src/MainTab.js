import React, {useContext}from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from "@react-native-community/async-storage"

import {UserContext} from './contexts/UserContext'

import Vagas from './screens/Vagas';
import Agenda from './screens/Agenda';
import Home from './screens/Home';
import PatientManager from './screens/PatientManager'

const Tab = createBottomTabNavigator();



function MainTab({navigation}) {
  const { data:user } = useContext(UserContext);

  const Size = () =>  user.name === user.doc ? 60 : 0 

  //if (user.name === user.doc) {}
  return(
    <Tab.Navigator screenOptions={{
      tabBarStyle: { backgroundColor: "#fff", height:Size() },
      tabBarInactiveTintColor:'#888',
      tabBarActiveTintColor:"#e77",
       }} //initialRouteName="Vagas" 
       >

      <Tab.Screen name='Home' component={Home} 
      options={{tabBarIcon:({color})=>(<MaterialCommunityIcons name="account" color={color} size={26} />)}} />

      { user.name === user.doc ? <Tab.Screen name='Agenda' component={Agenda} 
      options={{tabBarIcon:({color})=>(<MaterialCommunityIcons name="calendar-account" color={color} size={26} />)}} /> : null}

      { user.name === user.doc ? <Tab.Screen name='Vagas' component={Vagas} 
      options={{tabBarIcon:({color})=>(<MaterialCommunityIcons name="calendar-edit" color={color} size={26} />)}} /> : null}

      { user.name === user.doc ? <Tab.Screen name='Pacientes' component={PatientManager} 
      options={{tabBarIcon:({color})=>(<MaterialCommunityIcons name="account-edit" color={color} size={26} />)}} /> : null}

    </Tab.Navigator>
  );
  //} else return()
}
//{ user.doc === user.name ? }
// account-edit
export default MainTab;
