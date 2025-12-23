import React, {useEffect, useContext} from 'react';
import {ActivityIndicator, Text, View, Button, Image} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import Schedule from '../MockData/Schedule'; //Temp

import styles from '../styles';
import Api from '../Api'
import {UserContext} from '../contexts/UserContext';

function Preload({navigation}) {
  
  const {dispatch: userDispatch} = useContext(UserContext)
    useEffect(()=> {
      
    const checkToken = async()=>{
      const token = await AsyncStorage.getItem('token');
      
      //console.log('token', token)
      if(token){
        //let res = await AsyncSorage.getItem('data');        Api token validation
        //if(res.token){
         // await AsyncStorage.setitem('token', res.token);     Token refresh
        if(token==='valido'){        //Temp validation
          const user = await AsyncStorage.getItem('name');
          const docName = await AsyncStorage.getItem('docName');

          const ScheduleData = await AsyncStorage.getItem(docName);
          console.log("result",ScheduleData)
          const docSchedule = (ScheduleData!=null) ? ScheduleData : Schedule;

          
          const AlterationsData = await AsyncStorage.getItem('alterations');
          const b = ['']
          const alteration = (AlterationsData != null) ? AlterationsData : b;  


          userDispatch({ 
            type:'login',
            payload: {name: user, doc: docName, weekly: docSchedule, alterations: alteration}
          })

          navigation.reset({routes:[{name:'MainTab'}]})
          
        } else{navigation.navigate('SignIn')}
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
/*<Button title='SignIn' onPress={() => navigation.navigate('SignIn')} />   debug */
