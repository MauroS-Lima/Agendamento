import React from 'react';
import {Text,View,Button} from 'react-native'

import styles from '../styles';
import WeekView from '../components/WeekView'

function AdmHome({navigation}) {
  return(
     <View style = {{flex:1}}>
      <Text>Admin</Text>
      <WeekView/>
      <Button title='Logoff' onPress={() => navigation.navigate('Preload')} />
     </View>
  );
}

export default AdmHome;
