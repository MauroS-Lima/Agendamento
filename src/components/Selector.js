import { Text, TouchableOpacity, View, Modal } from 'react-native';
import React, { useState, useContext } from 'react';

import styles from '../styles';
import Card from './Card'

const test = {data: '28 Dez', hora: '12:00', subject: 'Disponível'}

const Selector = ({prop}) => {
  //console.log(prop)
  const color =(prop.active==='Disponível' ? 'green' : prop.active==='Indisponível' ? '#eee' : 'firebrick')
  return (
    <View><TouchableOpacity
      onPress={() => prop.onToggle(prop)}
      style={{
        marginVertical: 1,
        marginHorizontal: 4,
        backgroundColor: color,
        paddingVertical: 7,
        paddingHorizontal: 12,
        borderRadius: 10,
        justifyContent: "center",
      }}
    >
    { prop.hour < 6 ? <Text style={styles.time}>{prop.hour+7}:30</Text>:<Text style={styles.time}>{prop.hour+7}:00</Text>}
    
    </TouchableOpacity></View>
  )
}

export default Selector;
//<Text style={styles.time}>{active}</Text>
 //{active==='Disponível'||active==='Indisponível' ? <Text style={styles.time}>Status:</Text> : <Text style={styles.time}>Paciente:</Text>}
