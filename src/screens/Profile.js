import React, {useContext} from 'react';
import {Text,View, ScrollView} from 'react-native'
import AsyncStorage from "@react-native-community/async-storage"

import {UserContext} from '../contexts/UserContext';
import styles from '../styles';
import Butao from '../components/Butao';
import WeekView from '../components/WeekView'
import SchedView from '../components/SchedView'

function Profile({navigation}) {
  const {dispatch: userDispatch} = useContext(UserContext)
  const logOff = async()=>{
    navigation.reset({routes:[{name:'Preload'}]})
    await AsyncStorage.multiRemove(['name', 'docName', 'token'])
    userDispatch({type: 'logoff'})
  }
  const { data:user} = useContext(UserContext);
  
  return(
    <View style = {styles.container1}>
      <View style = {styles.profile} >{user.doc===user.name?<Text>Doutor(a) {user.name}</Text>:<Text>Usuario(a): {user.name}</Text>}
      {user.doc===user.name?<Text></Text>:<Text>Psicologo(a): {user.doc}</Text>}</View>
      
      <ScrollView style = {styles.scroller} contentContainerStyle = {styles.scrollerCont}>
        <SchedView/>      
      </ScrollView>
      <Butao text={'Logoff'} margen={15} color={'red'} onClick={() => logOff()}/>
    </View>
  );
}
//<Butao text={'LOGOFF'} color={'red'} onClick={logOff()}/>
export default Profile;
//{dados[0][1]===dados[1][1]?<Text>Psicologo(a)</Text>:<Text>Psicologo(a): {dados[1][1]}</Text>}
//multiRemove(['name', 'docName', 'token'])
//clear()
