import { Text, TouchableOpacity, View, Modal } from 'react-native';
import React, { useState, useContext } from 'react';



function Butao({color='blue', text='test', onClick=null}) {
  return(
    <TouchableOpacity
        onPress={onClick}
        style={{
          backgroundColor: 'blue',
          padding: 10,
          marginRight: 4,
          alignItems: 'center',
          borderRadius: 6,
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          {text}
        </Text>
      </TouchableOpacity>
  )
}

export default Butao;
