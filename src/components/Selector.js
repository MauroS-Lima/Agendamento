import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

import styles from '../styles';


const Selector = ({day, hour, active, onToggle}) => {
  const color =(active==='Disponível' ? 'green' : active==='Indisponível' ? '#eee' : 'red')
  return (
    <TouchableOpacity
      onPress={() => onToggle(day, hour, active)}
      style={{
        marginVertical: 2,
        backgroundColor: color,
        padding: 3,
        borderRadius: 4,
      }}
    >
    { hour < 6 ? <Text style={styles.time}>{hour+7}:30</Text>:<Text style={styles.time}>{hour+7}:00</Text>}
    {(active != "Disponível" && active != "Indisponível") && active}
    </TouchableOpacity>
  )
}

export default Selector;
