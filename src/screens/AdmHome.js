import React, {useState} from 'react';
import {Text,View,Button} from 'react-native'

import styles from '../styles';
import WeekView from '../components/WeekView'
//import Schedule from '../MockData/Schedule'

function AdmHome({navigation}) {
  //const [Storage, setStorage] = useState(Schedule)
  return(
     <View style = {{flex:1}}>
      <Text>Admin</Text>
      <WeekView />  //Storage?
      <Button title='Logoff' onPress={() => navigation.navigate('Preload')} />
     </View>
  );
}

export default AdmHome;
