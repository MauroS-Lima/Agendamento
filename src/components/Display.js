import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

import styles from '../styles';


const Display = ({day, hour, active, onToggle}) => {
  const color =(active==='Disponível' ? 'green' : active==='Indisponível' ? '#eee' : 'red')
  return (
    <TouchableOpacity
      onPress={() => onToggle(day, hour, active)}
      style={{
        marginVertical: 1,
        backgroundColor: color,
        padding: 3,
        borderRadius: 10,
        height:30,
      }}
    >
    { hour < 6 ? <Text style={styles.time}>{hour+7}:30</Text>:<Text style={styles.time}>{hour+7}:00</Text>}
    
    
    </TouchableOpacity>
  )
}

export default Display;
//<Text style={styles.time}>{active}</Text>
 //{active==='Disponível'||active==='Indisponível' ? <Text style={styles.time}>Status:</Text> : <Text style={styles.time}>Paciente:</Text>}
