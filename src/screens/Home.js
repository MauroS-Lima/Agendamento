import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import styles from '../styles';
import Api from  '../Api';
import Card from '../components/Card'
import WeekView from '../components/WeekView'

import Schedule from '../MockData/Schedule'

const test = {data: '28 Dez', hora: '12:00', subject: 'Disponível'}

const getSchedule = async() => {
  setLoading(true);
  const dados = async ()=>{
    await AsyncStorage.multiGet(['name', 'docName'])
  }
  //let res = await Api.getSchedule();
  //if(res.error == '') {
  //  setList(res.data);
  //} else{ alert('Error: ' +res.error)}

  setLoading(false);
}

const Section = () =>{
  return(
    <View style={styles.scrollerTab}>
      <Text>{test.data}</Text>
      <Text>{test.hora}</Text>
      <Text>{test.subject}</Text>
    </View>
  )
}

//contentContainerStyle = {styles.scrollerCont}>

function Home({navigation}) {

  useEffect(()=>{
  getSchedule();
}, []);

  return(
      <ScrollView style = {styles.scroller} contentContainerStyle = {styles.scrollerCont}>
      <Section />
      <ScrollView horizontal><Card props= {test}/></ScrollView>
      
      </ScrollView>
  );
}

export default Home;
