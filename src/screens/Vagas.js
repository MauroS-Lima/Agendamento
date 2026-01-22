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

  return(
      <ScrollView style = {styles.scroller} contentContainerStyle = {styles.scrollerCont}>
      <WeekView mode={2}/>
      </ScrollView>
  );
}

export default Vagas;
//<Section user={name} doc={doc}/>
