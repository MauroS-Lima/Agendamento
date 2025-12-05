import React, {useContext} from 'react';
import {Text,View,Button, TouchableOpacity} from 'react-native'
import styles from '../styles';
import AsyncStorage from "@react-native-community/async-storage"

import {UserContext} from '../contexts/UserContext';

function Profile({navigation}) {
  const {dispatch: userDispatch} = useContext(UserContext)
  const logOff = async()=>{
    navigation.reset({routes:[{name:'Preload'}]})
    await AsyncStorage.multiRemove(['name', 'docName', 'token'])
    userDispatch({type: 'logoff'})
  }
  const dados = async ()=>{
    await AsyncStorage.multiGet(['name', 'docName'])
  }
  return(
     <View style = {styles.container}>
     <View style = {styles.profile}>
     <Text>Nome: </Text>
     
      <Button title='Logoff' color='red' onPress={() => logOff()} />
      </View>
     </View>
  );
}

export default Profile;
//{dados[0][1]===dados[1][1]?<Text>Psicologo(a)</Text>:<Text>Psicologo(a): {dados[1][1]}</Text>}
//multiRemove(['name', 'docName', 'token'])
//clear()
