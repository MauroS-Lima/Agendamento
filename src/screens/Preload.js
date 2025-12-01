import React, {useEffect, useContext} from 'react';
import {ActivityIndicator, Text, View, Button, Image} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import styles from '../styles';
import Api from '../Api'
import {UserContext} from '../contexts/UserContext';

function Preload({navigation}) {

  const {dispatch: userDispatch} = useContext(UserContext)
    useEffect(()=> {
    const checkToken = async()=>{
      const token = await AsyncStorage.getItem('token');
      
      //console.log('data', {data})
      if(token){
        //let res = await AsyncSorage.getItem('data');
        //if(res.token){
         // await AsyncStorage.setitem('token', json.token);

          navigation.reset({routes:[{name:'MainTab'}]})
          
        //} else{navigation.navigate('SignIn')}
      } else{
        navigation.reset({routes: [{name: 'SignIn'}]});
      }
    }
    checkToken();
  });


  return (
    <View style = {styles.container}>
      <Image source={require('../assets/Clinica.jpg')} style={{width: 150, height:150, borderRadius:75, marginBottom:25}}/>
      <Text>Carregando...</Text>
      <ActivityIndicator size='large' color= '#fff'/>
    </View>
  );
}

export default Preload;
