import React from 'react';
import {Text,View,Button} from 'react-native'

import styles from '../styles';
import WeekSelect from '../components/WeekSelect'

function AdmHome({navigation}) {
  return(
     <View style = {{flex:1}}>
      <Text>Admin</Text>
      <WeekSelect/>
      <Button title='Logoff' onPress={() => navigation.navigate('Preload')} />
     </View>
  );
}

export default AdmHome;
