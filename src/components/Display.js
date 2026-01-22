import { Text, TouchableOpacity, View, Modal } from 'react-native';
import React, { useState, useContext } from 'react';

import styles from '../styles';

const test = {data: '28 Dez', hora: '12:00', subject: 'Disponível'}

const Selector = ({prop}) => {
  //console.log(prop)
  const color =(prop.active==='Disponível' ? 'lightgreen' : prop.active==='Indisponível' ? '#eee' : 'dodgerblue')
  return (
    <View style={{
        marginVertical: 1,
        backgroundColor: color,
        padding: 3,
        height:30,
        justifyContent: "center",
      }}>

      {!(prop.active==='Disponível'||prop.active==='Indisponível') ? <Text style={styles.time}>{prop.active}</Text> : prop.hour < 6 ? <Text style={styles.time}>{prop.hour+7}:30</Text>:<Text style={styles.time}>{prop.hour+7}:00</Text>}
      
      </View>
  )
}

export default Selector;
//<Text style={styles.time}>{active}</Text>
 //{active==='Disponível'||active==='Indisponível' ? <Text style={styles.time}>Status:</Text> : <Text style={styles.time}>Paciente:</Text>}
