import React, {useContext} from 'react';
import {ScrollView} from 'react-native'
import AsyncStorage from "@react-native-community/async-storage"

import {UserContext} from '../contexts/UserContext';
import styles from '../styles';
import SchedView from '../components/SchedView'

function Home({navigation}) {
  const {dispatch: userDispatch} = useContext(UserContext)

  const LogOff = async()=>{
    navigation.reset({routes:[{name:'Preload'}]})
    await AsyncStorage.multiRemove(['name', 'docName', 'token'])
    userDispatch({type: 'logoff'})
  }
  
  return( < SchedView logOff={LogOff} /> );
}
//<Butao text={'LOGOFF'} color={'red'} onClick={logOff()}/>
export default Home;
//{dados[0][1]===dados[1][1]?<Text>Psicologo(a)</Text>:<Text>Psicologo(a): {dados[1][1]}</Text>}
//multiRemove(['name', 'docName', 'token'])
//clear()
