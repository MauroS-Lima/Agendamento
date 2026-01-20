import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Modal } from 'react-native';
import React, { useState, useContext } from 'react';
import AsyncStorage from "@react-native-community/async-storage"

import styles from '../styles'
import Selector from './Selector'
import { UserContext } from '../contexts/UserContext'
import Butao from './Butao'



//import Schedule from '../MockData/Schedule'

const dayStr = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];
const textStr = ['uma data disponivel para reagendar', 'um horario para o paciente', 'seus horarios de consulta'];



function WeekView({mode=0}) {
  const { data:user} = useContext(UserContext);
  const {dispatch: userDispatch}=useContext(UserContext)
  const text = (mode === 1) ? 'Selecione um paciente: ' : null;

  const [Pacientes, setPacientes] = useState(user.pacientes);
  const [Paciente, setPaciente] = useState(user.pacientes[0]);
  const [Lista, setLista] = useState(user.weekly);

  const pacientesLivres = () => {setPacientes(Pacientes.filter((u) => Lista.some((x) => x.some((y) => y===u))))}

  const saveDisp = async() => {
    userDispatch({type:'weekly', payload: {weekly: Lista} });

    sending=JSON.stringify(Lista)

    AsyncStorage.setItem(user.name, sending)

  };

  //

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
      console.log(props.paciente)
      setLista((s) =>
        s.map((dia,i) => i === props.day ? dia.map(
          (hora,j)=> j=== props.hour ? hora.hour = props.paciente : hora): dia) 
      );
    }
  };
//
  return (
    <View style={styles.weekly} >

      <Text style={{ fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>{text}</Text>

      <ScrollView horizontal style={{ flexDirection: 'row', padding:5 }}>{Pacientes.map((a) => (
        <Butao text={a} />
        ))}</ScrollView>

      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 14, textAlign: 'center' }}>
        Selecione {textStr[mode]}:
      </Text>

      <ScrollView horizontal style={{alignItems: "left"}} >
        <View style={{ flexDirection: 'row', alignItems: "left", padding: 5, backgroundColor: "#0EADBE",}}>
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

                const x = {day:dia, hour: hora, active:ativo, livre: Pacientes, onToggle: mode===2 ? toggleSlot : pickSlot}

                return (
                  <Selector prop={x}/> 
                );
                
              })}
            </View>
          ))}
        </View>
      </ScrollView> 

      <TouchableOpacity
        onPress={saveDisp}
        style={{
          backgroundColor: 'blue',
          padding: 10,
          marginTop: 12,
          alignItems: 'center',
          borderRadius: 6,
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Salvar
        </Text>
      </TouchableOpacity>
      

    </View>
  );
}

export default WeekView;


//  const clearDisp = async() => { AsyncStorage.removeItem(name) };

