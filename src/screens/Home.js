import React, {useState, useEffect, useContext} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import styles from '../styles';
import Api from  '../Api';
import Card from '../components/Card'
import { UserContext } from '../contexts/UserContext'
import WeekView from '../components/WeekView'



const test = {data: '28 Dez', hora: '12:00', subject: 'Disponível'}

const Section = (data) =>{

  return(
    <View style={styles.scrollerTab}>
      {data.doc===data.user?<Text>Psicologo(a) {data.user}</Text>:<Text>Psicologo(a){data.user}</Text>}
      {data.doc=data.user?<Text></Text>:<Text>Psicologo(a): {data.user}</Text>}
    </View>  
  )
} 

//contentContainerStyle = {styles.scrollerCont}>

function Home({navigation}) {
  const { data:user} = useContext(UserContext);
  const name = user.name
  const doc = user.doc
  const weekly = user.weekly
  const alterations = user.alterations
  return(
      <ScrollView style = {styles.scroller} contentContainerStyle = {styles.scrollerCont}>
        <Section user={name} doc={doc}/>
      {name===doc?<WeekView/>:<ScrollView horizontal><Card props= {test}/></ScrollView>}
      
      </ScrollView>
  );
}

export default Home;
//<Section user={name} doc={doc}/>
