import React from 'react';
import {Text,View,Button} from 'react-native'
import styles from '../styles';
import AsyncStorage from "@react-native-community/async-storage"

function Profile({navigation}) {
  const logOff = async()=>{
    navigation.reset({routes:[{name:'SignIn'}]})
    await AsyncStorage.clear()
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
