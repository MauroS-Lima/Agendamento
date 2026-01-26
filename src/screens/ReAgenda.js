import React, {useState, useEffect, useContext} from 'react';
import { ScrollView } from 'react-native'

import styles from '../styles';
import Api from  '../Api';
import Card from '../components/Card'
import { UserContext } from '../contexts/UserContext'
import WeekView from '../components/WeekView'
import SchedView from '../components/SchedView'



const test = {data: '28 Dez', hora: '12:00', subject: 'Disponível'}

//contentContainerStyle = {styles.scrollerCont}>

function ReAgenda({navigation}) {
  const { data:user} = useContext(UserContext);
  return( <SchedView/> );
}

export default ReAgenda;
//<Section user={name} doc={doc}/>
