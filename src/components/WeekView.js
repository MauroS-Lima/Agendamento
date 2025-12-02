import { StyleSheet, Text, TouchableOpacity, ScrollView, View } from 'react-native';
import React, { useState } from 'react';

import styles from '../styles'
import Selector from './Selector'
import Schedule from '../MockData/Schedule'

const dayStr = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];



function WeekView({mode=false}) {
  const [Lista, setLista] = useState(Schedule);

  const saveDisp = () => {                                               //Testes

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
    <ScrollView style={styles.scroller} >
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 8, textAlign: 'center' }}>
        Selecionar disponibilidade
      </Text>

      <ScrollView horizontal >
        <View style={{ flexDirection: 'row' }}>
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

      
      

    </ScrollView>
  );
}

export default WeekView;
