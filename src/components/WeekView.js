import { StyleSheet, Text, TouchableOpacity, ScrollView, View } from 'react-native';
import React, { useState } from 'react';

import styles from '../styles'
import Selector from './Selector'

const dayStr = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];

const setDisp = (therapistId, slots) => {
    setDisponibilidade((avail) => ({
      ...avail,
      [therapistId]: slots,
    }));
  };

const saveDisp = () => {
    setDisp(user.id, SelectSlots);
    Alert.alert('Disponibilidade atualizada');
  };

function WeekView() {
  const [Lista, setLista] = useState([]);
  
  const toggleSlot = (day, hour, active) => {
    if (active) {
      setLista((s) =>
        s.filter((slot) => !(slot.day === day && slot.hour === hour))
      );
    } else {
      setLista((s) => [...s, { day, hour }]);
    }
  };

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 8 }}>
        Disponibilidade (Click para selecionar)
      </Text>

      <ScrollView horizontal>
        <View style={{ flexDirection: 'row' }}>
          {[...Array(7)].map((_, dia) => (
            <View
              style={styles.day}
            >
              <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
                {dayStr[dia]}
              </Text>
              {[...Array(14)].map((__, i) => {
                const hora = 7 + i;
                
                const ativo = Lista.some(
                  (s) => s.day === dia && s.hour === hora
                );

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

