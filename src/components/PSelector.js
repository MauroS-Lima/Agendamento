import { Text, TouchableOpacity, View, Modal } from 'react-native';
import React, { useState, useContext } from 'react';

import styles from '../styles';
import Card from './Card'

const PSelector = ({prop}) => {
  //console.log(prop)    paciente 
  const [modal, setModal] = useState(false);
  const color =(prop.active==='Disponível' ? 'green' : prop.active==='Indisponível' ? '#eee' : 'dodgerblue')
  return (
    <View><TouchableOpacity
      onPress={() => { if( prop.active !== 'Indisponível' ){ setModal(true) } } }
      style={{
        marginVertical: 1,
        backgroundColor: color,
        padding: 3,
        borderRadius: 10,
        height:30,
        justifyContent: "center",
      }}
    > 
    {!(prop.active==='Disponível'||prop.active==='Indisponível') ? <Text style={styles.time}>{prop.active}</Text> : prop.hour < 6 ? <Text style={styles.time}>{prop.hour+7}:30</Text>:<Text style={styles.time}>{prop.hour+7}:00</Text>}
    
    </TouchableOpacity><Modal transparent={true} visible={modal} onRequestClose={()=>{setModal(false)}}><Card props={prop} power={setModal} /></Modal></View>
  )
}

export default PSelector;
//<Text style={styles.time}>{active}</Text>
//prop.onToggle(prop)

