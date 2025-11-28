import { StyleSheet, Text, TouchableOpacity, ScrollView, View } from 'react-native';
import React, { useState } from 'react';


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

function WeekSelect() {
  const [SelectSlots, setSelectSlots] = useState([]);

  const toggleSlot = (day, hour) => {
    const exists = SelectSlots.some(
      (s) => s.day === day && s.hour === hour
    );
    if (exists) {
      setSelectSlots((s) =>
        s.filter((slot) => !(slot.day === day && slot.hour === hour))
      );
    } else {
      setSelectSlots((s) => [...s, { day, hour }]);
    }
  };



  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 8 }}>
        Disponibilidade (Click para selecionar)
      </Text>

      <ScrollView horizontal>
        <View style={{ flexDirection: 'row' }}>
          {[...Array(7)].map((_, day) => (
            <View
              key={day}
              style={{
                borderWidth: 1,
                marginRight: 8,
                padding: 4,
                width: 60,
              }}
            >
              <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>
                {dayStr[day]}
              </Text>
              {[...Array(11)].map((__, i) => {
                const hour = 8 + i;
                const selected = SelectSlots.some(
                  (s) => s.day === day && s.hour === hour
                );
                return (
                  <TouchableOpacity
                    key={hour}
                    onPress={() => toggleSlot(day, hour)}
                    style={{
                      marginVertical: 2,
                      backgroundColor: selected ? 'green' : '#eee',
                      padding: 3,
                      borderRadius: 4,
                    }}
                  >
                    <Text style={{ fontSize: 11, textAlign: 'center' }}>
                      {hour}:00
                    </Text>
                  </TouchableOpacity>
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

export default WeekSelect;
