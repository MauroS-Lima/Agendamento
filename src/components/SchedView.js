import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Modal } from 'react-native';
import React, { useState, useContext } from 'react';
import AsyncStorage from "@react-native-community/async-storage"

import styles from '../styles'
import Display from './Display'
import { UserContext } from '../contexts/UserContext'
import Butao from './Butao'
import Schedule from '../MockData/Schedule'

const dayStr = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];
const textStr = ['Cronograma da semana', 'Selecione uma data disponivel para reagendar'];



function SchedView({mode=0}) {
  const { data:user} = useContext(UserContext);
  const { dispatch: userDispatch } = useContext(UserContext);

  
  const [Changes, setChanges] = useState(user.alterations);
  const [Lista, setLista] = useState(user.weekly);

  //const pacientesLivres = () => {setPacientes(user.pacientes.filter((u) => Lista.some((x) => x.some((y) => y===u))))}

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

      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 14, textAlign: 'center' }}>
        {textStr[mode]}:
      </Text>

      <ScrollView horizontal style={{alignItems: "left"}} >
        <View style={{ flexDirection: 'row', alignItems: "left", padding: 5, marginBottom: 10, backgroundColor: "#0EADBE",}}>
          {[...Array(7)].map((_, dia) => (
            <View
              style={styles.day}
            >
              <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 5}}>
                {dayStr[dia]}
              </Text>
              {[...Array(14)].map((_, i) => {
                const hora = 0 + i;
            
                const ativo = Lista[dia][hora]
                
                const x = {day:dia, hour: hora, active:ativo, paciente: user.pacientes[0], diaSem: dayStr, type: mode,
                clear: clearSlot, onToggle: pickSlot
                }

                if(mode===0){
                  return( <Display prop={x}/> )
                } else( <Display prop={x}/> )
                
              })}
            </View>
          ))}
        </View>
      </ScrollView> 

      { mode !== 0 ? <View style={{flexDirection: 'row'}}><Butao text={'Salvar'} onClick={saveDisp}/> 
      <Butao text={'Limpar'} color = {'red'} onClick={() => {if(mode===1){
        user.pacientes.map((a) => {clearSlot({ paciente: a })})
        }else{clearDisp()}}}/></View> : <Text></Text>}

    </View>
  );
}

export default SchedView;

//<Butao text={'Salvar'} color = {'red'} onClick={() => {user.pacientes.map((a) => {clearSlot({ paciente: a })})}}/> 
//  const clearDisp = async() => { AsyncStorage.removeItem(name) };
