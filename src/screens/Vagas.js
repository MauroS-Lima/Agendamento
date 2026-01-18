import React, {useState, useEffect, useContext} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

import styles from '../styles';
import Api from  '../Api';
import Card from '../components/Card'
import { UserContext } from '../contexts/UserContext'
import WeekView from '../components/WeekView'



const test = {data: '28 Dez', hora: '12:00', subject: 'Disponível'}


//contentContainerStyle = {styles.scrollerCont}>

function Vagas({navigation}) {
  const { data:user} = useContext(UserContext);
  const name = user.name
  const doc = user.doc
  const weekly = user.weekly
  const alterations = user.alterations
  return(
      <ScrollView style = {styles.scroller} contentContainerStyle = {styles.scrollerCont}>
      {name===doc?<WeekView mode={2}/>:<ScrollView horizontal><Card props= {test}/></ScrollView>}
      
      </ScrollView>
  );
}

export default Vagas;
//<Section user={name} doc={doc}/>
