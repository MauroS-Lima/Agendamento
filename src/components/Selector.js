import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

import styles from '../styles';


const Selector = ({day, hour, active, onToggle}) => {

  return (
    <TouchableOpacity
      onPress={() => onToggle(day, hour, active)}
      style={{
        marginVertical: 2,
        backgroundColor: active ? 'green' : '#eee',
        padding: 3,
        borderRadius: 4,
      }}
    >
    { hour < 13 ? <Text style={styles.time}>{hour}:30</Text>:<Text style={styles.time}>{hour}:00</Text>}
    </TouchableOpacity>
  )
}

export default Selector;
