import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native'

import styles from '../styles';
import Api from  '../Api';

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
      <Text>{time}</Text>
      <Text>{subject}</Text>
      <Text>{status}</Text>
    </View>
  )
}

function Home({navigation}) {

  useEffect(()=>{
  getSchedule();
}, []);

  return(
     <View style = {styles.container}>
      <Text>Home</Text>
      <ScrollView style = {styles.scroller}>
      {Section('subject', 'status', 'time')}
      </ScrollView>
     </View>
  );
}

export default Home;
