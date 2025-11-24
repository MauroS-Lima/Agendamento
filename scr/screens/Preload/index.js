import React, {useEffect, useContext} from 'react';
import {ActivityIndicator, Text, View, Button} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import styles from './styles';
import Api from '../../Api'
import {UserContext} from '../../contexts/UserContext';

async function Preload({navigation}) {

  const {dispatch: userDispatch} = useContext(UserContext)
  
  useEffect(()=> {
    const checkToken = async()=>{
      const token = await AsyncStorage.getItem('token');
      if(token !== null){
        let res = await AsyncSorage.getItem('token');
        if(res.token){
          await AsyncStorage.setitem('token', json.token);

          userDispatch({
            type: 'setAvatar',
            payload:{
              avatar: json.data.avatar
            }
          });

          navigation.reset({routes:[{name:'Home'}]})
          
        } else{navigation.navigate('SignIn')}
      } else{
        navigation.navigate('SignIn');
      }
    }
    checkToken();
  });

  return (
    <View style = {styles.container}>
      <Text>Carregando...</Text>
      <ActivityIndicator size='large' color= '#fff'/>
      <Button title='Ir para SignIn' onPress={() => navigation.reset({routes: [{name: 'SignIn'}]})} />
    </View>
  );
}

export default Preload;
