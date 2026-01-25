import { Text, TouchableOpacity, View, Modal } from 'react-native';
import React, { useState, useContext } from 'react';

import styles from '../styles';

const Selector = ({prop}) => {
  //console.log(prop)
  const color = (prop.active==='Disponível' ? 'lightgreen' : prop.active==='Indisponível' ? '#eee' : prop.doc ? 'dodgerblue' : 'red')
  const show = ( prop.doc ? prop.active : 'Ocupado')
  const padd = (!(prop.active==='Disponível'||prop.active==='Indisponível') ? 2 : 13)
  return (
    <View style={{
        marginVertical: 1,
        backgroundColor: color,
        paddingVertical: 7,
        paddingHorizontal: padd,
        justifyContent: "center",
      }}>

      {!(prop.active==='Disponível'||prop.active==='Indisponível') ? <Text style={styles.time}>{show}</Text> : prop.hour < 6 ? <Text style={styles.time}>{prop.hour+7}:30</Text>:<Text style={styles.time}>{prop.hour+7}:00</Text>}
      </View> 
  )
}

export default Selector;
//<Text style={styles.time}>{active}</Text>
 //{active==='Disponível'||active==='Indisponível' ? <Text style={styles.time}>Status:</Text> : <Text style={styles.time}>Paciente:</Text>}
