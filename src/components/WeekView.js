import { StyleSheet, Text, TouchableOpacity, ScrollView, View } from 'react-native';
import React, { useState, useContext } from 'react';

import styles from '../styles'
import Selector from './Selector'
import { UserContext } from '../contexts/UserContext'
import AsyncStorage from "@react-native-community/async-storage"

//import Schedule from '../MockData/Schedule'

const dayStr = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];
const textStr = ['uma data disponivel para reagendar', 'um horario para o paciente', 'seus horarios de consulta'];



function WeekView({mode=0}) {
  const { data:user} = useContext(UserContext);
  const {dispatch: userDispatch}=useContext(UserContext)
  const name = user.name
  const doc = user.doc
  const weekly = user.weekly
  console.log('weekly',weekly)
  const alterations = user.alterations
  const [Lista, setLista] = useState(weekly);

  const saveDisp = async() => {                                               //Testes
    userDispatch({type:'weekly', payload: {weekly: Lista} });

    sending=JSON.stringify(Lista)

    console.log(sending)

    AsyncStorage.setItem(name, sending)
    console.log( AsyncStorage.getItem(name))

    {console.log("foi", Lista)}
  };

  const clearDisp = async() => { AsyncStorage.removeItem(name) };

  const toggleSlot = (day, hour, active) => {
    if (active==='Disponível') { 
      setLista((s) =>
        s.map((dia,i) => i === day ? dia.map(
          (hora,j)=> j===hour ? hora.hour='Indisponível' : hora): dia) 
      );
    } else if (active ==='Indisponível'){
      setLista((s) => 
        s.map((dia,i) => i === day ? dia.map(
          (hora,j)=> j===hour ? hora.hour='Disponível' : hora): dia)
      );
    }
  };

  return (
    <View style={styles.weekly} >
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
              {[...Array(14)].map((__, i) => {
                const hora = 0 + i;
            
                const ativo = Lista[dia][hora]
                //console.log('erro', Lista)

                return (
                  <Selector day={dia} hour= {hora} active={ativo} onToggle={toggleSlot}/>
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
