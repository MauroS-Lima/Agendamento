import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Preload from './src/screens/Preload';
import SignIn from './src/screens/SignIn/Index'
import MainTab from './src/MainTab';
import UserContextProvider from './src/contexts/UserContext';

const Stack = createStackNavigator()

function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Preload"
          screenOptions={{headerShown: false}}>
        <Stack.Screen name="Preload" component={Preload}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="MainTab" component={MainTab}/>
        </Stack.Navigator>
      </NavigationContainer>
    </UserContextProvider>
  );
}

export default App;
