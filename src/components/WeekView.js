import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Modal } from 'react-native';
import React, { useState, useContext } from 'react';
import AsyncStorage from "@react-native-community/async-storage"

import styles from '../styles'
import Selector from './Selector'
import PSelector from './PSelector'
import { UserContext } from '../contexts/UserContext'
import Butao from './Butao'
import Schedule from '../MockData/Schedule'

const dayStr = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];
const textStr = ['uma data disponivel para reagendar', 'um horario para o paciente', 'seus horarios de consulta'];



function WeekView({mode=0}) {
  const { data:user} = useContext(UserContext);
  const { dispatch: userDispatch } = useContext(UserContext);
  const text = (mode === 1) ? 'Selecione um paciente: ' : null;

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
    <View style={styles.weekly} >

      <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>{text}</Text>

      {mode === 1 ? <ScrollView horizontal style={{ flexDirection: 'row', padding:5 }}>{user.pacientes.map((a) => (
        <Butao text={a} onClick={() => setPaciente(a)} borda={ a===Paciente ? 2 : 0 } size={6} 
        color={ Lista.some((x) => x.some((y) =>  y === a ) ) ? 'dodgerblue' : '#888' }/> 
        ))}</ScrollView> : <Text></Text>}

      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 14, textAlign: 'center' }}>
        Selecione {textStr[mode]}:
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
                
                const x = {day:dia, hour: hora, active:ativo, livre: user.pacientes, paciente: Paciente, diaSem: dayStr, type: mode,
                clear: clearSlot, onToggle: mode===2 ? toggleSlot : pickSlot
                }

                switch(mode){
                  case 2:{
                    return(<Selector prop={x}/>)
                  }
                  case 1:{
                    return(<PSelector prop={x}/>)
                  }
                }
                
              })}
            </View>
          ))}
        </View>
      </ScrollView> 

      <View style={{flexDirection: 'row'}}><Butao text={'Salvar'} onClick={saveDisp}/> 
      <Butao text={'Limpar'} color = {'red'} onClick={() => {if(mode===1){
        user.pacientes.map((a) => {clearSlot({ paciente: a })})
        }else{clearDisp()}}}/></View>

    </View>
  );
}

export default WeekView;

//<Butao text={'Salvar'} color = {'red'} onClick={() => {user.pacientes.map((a) => {clearSlot({ paciente: a })})}}/> 
//  const clearDisp = async() => { AsyncStorage.removeItem(name) };

