import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Modal } from 'react-native';
import React, { useState, useContext } from 'react';
import AsyncStorage from "@react-native-community/async-storage"

import styles from '../styles'
import Display from './Display'
import { UserContext } from '../contexts/UserContext'
import Butao from './Butao'
import Schedule from '../MockData/Schedule'

const dayStr = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
const textStr = ['Cronograma da semana', 'Selecione uma data disponivel para reagendar'];



function SchedView({mode=0}) {
  const { data:user} = useContext(UserContext);
  const { dispatch: userDispatch } = useContext(UserContext);

  const [Changes, setChanges] = useState(user.alterations);
  const [Lista, setLista] = useState(user.weekly);

  const now = new Date(2026,0,27)

  const data = (dia) => {
    num = new Date(new Date(now.valueOf()+((dia-now.getDay())*86400000)))
    return(num)    
  }

  const saveDisp = async() => {
    userDispatch({type:'reschedule', payload: {alterations: Changes} });

    sending=JSON.stringify(Changes)

    AsyncStorage.setItem('alterations', sending)

  };

  const clearDisp = async() => { 

    setLista(Schedule)
   
    userDispatch({type:'scheduleRemove', alterations: {weekly: Changes} });

    sending=JSON.stringify(Lista)

    AsyncStorage.removeItem(user.name)
    };

  const pickSlot = (props) => {
    if (props.active !== 'Indisponível') { 
      setLista((s) =>
        s.map((dia,i) => i === props.day ? dia.map(
          (hora,j)=> j=== props.hour ? hora.hour = props.paciente : hora): dia) 
      );
    }
  };
  const clearSlot = (props) => {
    setLista((s) =>
      s.map((dia) => dia.map(
        (hora)=> hora === props.paciente ? hora.hour = 'Disponível' : hora)) 
    );
    
  };
 
//color={ Lista.some((x) => { x.some((y) => { y === a }) }) ? 'navi' : '#ccc' } 
  return (
    <View style={styles.weekly} >

      <Text style={styles.header}>
        {textStr[mode]}:
      </Text>

      <ScrollView horizontal style={{ marginTop: 14, padding: 5, backgroundColor: "#0EADBE",}} >        
          {[...Array(7)].map((_, dia) => (

            <View style={dia === now.getDay() ? {...styles.day, borderWidth: 3, } : 
            mode === 1 && dia<now.getDay() ? {...styles.day, backgroundColor: '#ccc'} : styles.day} >

              <Text style={styles.title}>
                {dayStr[dia]}{'\n'}{JSON.stringify(data(dia).getDate()) + '/' + JSON.stringify(data(dia).getMonth() + 1)}
              </Text>

              {[...Array(14)].map((_, i) => {
                const hora = 0 + i;
            
                const ativo = Lista[dia][hora]
                
                const x = {day:dia, hour: hora, active: ativo, doc: user.name === user.doc, diaSem: dayStr, type: mode,
                clear: clearSlot, onToggle: pickSlot }

                if( mode === 1 && dia>now.getDay() ) { return( <Display prop={x}/> )
                } else return(<Display prop={x}/>) 
                
              })}
            </View>
          ))}        
      </ScrollView> 

    </View>
  );
}

export default SchedView;

//<Butao text={'Salvar'} color = {'red'} onClick={() => {user.pacientes.map((a) => {clearSlot({ paciente: a })})}}/> 
//  const clearDisp = async() => { AsyncStorage.removeItem(name) };
