import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Modal } from 'react-native';
import React, { useState, useContext } from 'react';
import AsyncStorage from "@react-native-community/async-storage"

import styles from '../styles'
import Display from './Display'
import Selector from './Selector'
import PSelector from './PSelector'
import { UserContext } from '../contexts/UserContext'
import Butao from './Butao'
import Schedule from '../MockData/Schedule'

const dayStr = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
const textStr = ['Selecione seus horarios de consulta', 'Selecione um horario para o paciente', ];
const clear = ['Limpar', 'Remover'];



function WeekView({mode=0}) {
  const { data: user } = useContext(UserContext);
  const { dispatch: userDispatch } = useContext(UserContext);
  const text = 'Selecione um paciente: '

  const [Paciente, setPaciente] = useState(user.pacientes[0]);
  const [Lista, setLista] = useState(user.weekly);

  //const pacientesLivres = () => {setPacientes(user.pacientes.filter((u) => Lista.some((x) => x.some((y) => y===u))))}

  const saveDisp = async() => {
    userDispatch({type:'weekly', payload: {weekly: Lista} });

    sending=JSON.stringify(Lista)

    AsyncStorage.setItem(user.name, sending)

  };

  const clearDisp = async() => { 

    setLista(Schedule)
   
    userDispatch({type:'weekly', payload: {weekly: Lista} });

    sending=JSON.stringify(Lista)

    AsyncStorage.removeItem(user.name) 
    
    };

  const toggleSlot = (props) => {
    if (props.active==='Disponível') { 
      setLista((s) =>
        s.map((dia,i) => i === props.day ? dia.map(
          (hora,j)=> j === props.hour ? hora.hour='Indisponível' : hora): dia) 
      );
    } else if (props.active ==='Indisponível'){
      setLista((s) => 
        s.map((dia,i) => i === props.day ? dia.map(
          (hora,j)=> j === props.hour ? hora.hour='Disponível' : hora): dia)
      );
    }
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
    <ScrollView style = {styles.scroller} contentContainerStyle = {styles.scrollerCont}>

      {(mode === 1) ? <View> <Text style={styles.header}>{text}</Text>
      <ScrollView horizontal style={{ flexDirection: 'row', padding:5 }}>{user.pacientes.map((a) => (
        <Butao text={a} top={14} onClick={() => setPaciente(a)} borda={ a===Paciente ? 2 : 0 } size={6} 
        color={ Lista.some((x) => x.some((y) =>  y === a ) ) ? 'dodgerblue' : '#888' }/> 
        ))} </ScrollView></View> : <Text></Text>}

      <Text style={styles.header}>
        {textStr[mode]}:
      </Text>

      <ScrollView horizontal style={{marginTop: 14, padding: 5, backgroundColor: "#0EADBE"}} >
        
          {[...Array(7)].map((_, dia) => (
            <View
              style={styles.day}
            >
              <Text style={styles.title}>
                {dayStr[dia]}
              </Text>
              {[...Array(14)].map((_, i) => {
                const hora = 0 + i;
            
                const ativo = Lista[dia][hora]
                
                const x = {day:dia, hour: hora, active: ativo, paciente: Paciente, diaSem: dayStr, type: 0,
                clear: clearSlot, onToggle: mode===0 ? toggleSlot : pickSlot
                }

                if( mode === 1 ){return(<PSelector prop={x}/>)} else return(<Selector prop={x}/>)

              
                
              })}
            </View>
          ))}
      </ScrollView> 

      <View style={{flexDirection: 'row', marginVertical: 10}}>
        <Butao text={'Salvar'} onClick={saveDisp}/> 
        <Butao text={clear[mode]} color = {'red'} onClick={() => {if(mode===1){
          clearSlot({ paciente: Paciente })} else {clearDisp()}}}
        />
      </View> 
    </ScrollView>
  );
}

export default WeekView;

//<Butao text={'Limpar'} color = {'red'} onClick={() => {user.pacientes.map((a) => {clearSlot({ paciente: a })})}}/> 
//  const clearDisp = async() => { AsyncStorage.removeItem(name) };
