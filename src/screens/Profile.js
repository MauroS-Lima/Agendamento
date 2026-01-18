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
  const { data:user} = useContext(UserContext);
  const name = user.name
  const doc = user.doc
  //console.log('doc',doc)
  
  return(
     <View style = {styles.container}>
     <View style = {styles.profile}>
      {doc===name?<Text>Psicologo(a) {name}</Text>:<Text>Psicologo(a){name}</Text>}
      {doc===name?<Text></Text>:<Text>Psicologo(a): {name}</Text>}

     
      <TouchableOpacity onPress={()=>{logOff()}}
        style={{
          backgroundColor: 'red',
          padding: 10,
          marginTop: 12,
          alignItems: 'center',
          borderRadius: 6, }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>LOGOFF</Text></TouchableOpacity>
      </View>
     </View>
  );
}

export default Profile;
//{dados[0][1]===dados[1][1]?<Text>Psicologo(a)</Text>:<Text>Psicologo(a): {dados[1][1]}</Text>}
//multiRemove(['name', 'docName', 'token'])
//clear()
