import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Button } from 'react-native';
import React, { useState, useContext } from 'react';

import styles from '../styles'
import Display from './Display'
import { UserContext } from '../contexts/UserContext'
//import Schedule from '../MockData/Schedule'

const dayStr = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];



function Weekly({mode=false}) {
  const { data:user} = useContext(UserContext);
  const {dispatch: userDispatch}=useContext(UserContext)
  const name = user.name
  const doc = user.doc
  const weekly = user.weekly
  const alterations = user.alterations
  const [Lista, setLista] = useState(weekly);

  const saveDisp = async() => {                                               //Testes
    userDispatch({type:'weekly', payload: {weekly: Lista} });

    //await AsyncStorage.setItem('name, Lista')

    {console.log("foi", Lista)} 
  };

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
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 8, textAlign: 'center' }}>
        Selecionar disponibilidade
      </Text>

      <ScrollView horizontal style={{alignItems: "left"}} >
        <View style={{ flexDirection: 'row', alignItems: "left"}}>
          {[...Array(7)].map((_, dia) => (
            <View
              style={styles.day}
            >
              <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
                {dayStr[dia]}
              </Text>
              {[...Array(14)].map((__, i) => {
                const hora = 0 + i;
            
                const ativo = Lista[dia][hora]
                //console.log('erro', Lista)

                return (
                  <Display day={dia} hour= {hora} active={ativo} onToggle={toggleSlot}/>
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
      <Button title='Reset' onPress={() => resetDisp()} />

      
      

    </View>
  );
}

export default Weekly;
