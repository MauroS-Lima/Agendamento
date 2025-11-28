import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native'

import styles from '../styles';
import Api from  '../Api';
import Card from '../components/Card'

const test = {data: '28 Dez', hora: '12:00', subject: 'disponivel'}

const getSchedule = async() => {
  setLoading(true);
  setList([]);

  let res = await Api.getSchedule();
  if(res.error == '') {
    setList(res.data);
  } else{ alert('Error: ' +res.error)}

  setLoading(false);
}

const Section = ({subject, status, time }) =>{
  return(
    <View style={styles.scrollerTab}>
      <Text>{test.data}</Text>
      <Text>{test.hora}</Text>
      <Text>{test.subject}</Text>
    </View>
  )
}

function Home({navigation}) {

  useEffect(()=>{
  getSchedule();
}, []);

  return(
     <View contentContainerStyle = {styles.container}>
      <Text>Home</Text>
      <ScrollView style = {styles.scroller}>
      <Section time='time' subject ='subject' status = 'status'/>
      <Card props= {test}/>
      </ScrollView>
     </View>
  );
}

export default Home;
