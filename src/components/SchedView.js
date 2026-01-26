import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Modal } from 'react-native';
import React, { useState, useContext } from 'react';
import AsyncStorage from "@react-native-community/async-storage"


import styles from '../styles'
import Display from './Display'
import { UserContext } from '../contexts/UserContext'
import Butao from './Butao'
import Butao2 from './Butao2'
import Schedule from '../MockData/Schedule'
import RSelector from './RSelector'

const dayStr = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
const textStr = ['Cronograma da semana', 'Selecione uma data disponivel para reagendar'];



function SchedView({logOff, mode=0}) {
  const { data:user} = useContext(UserContext);
  const { dispatch: userDispatch } = useContext(UserContext);

  const [Changes, setChanges] = useState(user.alterations);
  const [Lista, setLista] = useState(user.weekly);

  const now = new Date(new Date().toDateString())

  const [ Data, setData] = useState(now)

  const data = (dia) => {
    num = new Date(Data.valueOf()+((dia - Data.getDay())*86400000))
    return(num)    
  }

  const weekAdd = () => {
    num = new Date(Data.valueOf() + 604800000)
    setData(num)
  }

  const weekSub = () => {
    num = new Date(Data.valueOf() - 604800000)
    setData(num)
  }

  const saveChanges = async(props) => {
    num = new Date(props.data.getFullYear(), props.data.getMonth(), props.data.getDate(), props.hour+7)

    x = [...user.alterations, { name: user.name, time: num }]

    console.log(x)

    userDispatch({type:'reschedule', payload: {alterations: x} });

    console.log(x)


    //await AsyncStorage.setItem('Alterations', JSON.stringify(x))
    //setChanges([...user.alterations, { name: user.name, time: num }]) 

    //sending=JSON.stringify(Changes)

    //AsyncStorage.setItem('alterations', sending)

  };
  

  const selectSlot = (props) => {
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
 
  return (
    <ScrollView style = {styles.scroller} contentContainerStyle = {styles.scrollerCont}>

    <View style = {styles.profile} >{user.doc===user.name?<Text>Doutor(a) {user.name}</Text>:<Text>Usuario(a): {user.name}</Text>}
      {user.doc===user.name?<Text></Text>:<Text>Psicologo(a): {user.doc}</Text>}</View>

      <Text style={styles.header}>
        {textStr[mode]}:
      </Text>
      <ScrollView horizontal style={{ padding: 5, backgroundColor: "#0EADBE", marginTop: 10}} >
          {[...Array(7)].map((_, dia) => (

            <View style={data(dia).valueOf() === now.valueOf() ? {...styles.day, borderWidth: 3, } : 
            (mode === 1) && data(dia).valueOf() < now.valueOf() ? {...styles.day, backgroundColor: '#ccc'} : styles.day} >

              <Text style={styles.title}>
                {dayStr[dia]}{'\n'}{JSON.stringify(data(dia).getDate()) + '/' + JSON.stringify(data(dia).getMonth() + 1)}
              </Text>

              {[...Array(14)].map((_, i) => {
                const hora = 0 + i;
            
                const ativo = Lista[dia][hora]
                
                const x = {day:dia, hour: hora, active: ativo, doc: user.name === user.doc, diaSem: dayStr, type: 2, data: data(dia),
                onToggle: saveChanges }

                if( mode === 1 && data(dia).valueOf() > now.valueOf() && ativo === 'Disponível') { return( <RSelector prop={x}/> )
                } else return( <Display prop={x}/>) 
                
              })}
            </View>
          ))}        
      </ScrollView> 

      <View style = {{backgroundColor: "#0EADBE", justifyContent: "center", alignItems: "center", flexDirection: 'row',
      borderBottomRightRadius: 10, borderBottomLeftRadius: 15, }} >
      <Butao2 onClick={() =>weekSub()}/>
      <Butao text={'Logoff'} margen={2} size={7} color={'red'} onClick={() => logOff()}/>
      <Butao2 text='arrow-right-drop-circle' onClick={() =>weekAdd()}/>
      </View>

      

    </ScrollView>
  );
}

export default SchedView;

//<Butao text={'Salvar'} color = {'red'} onClick={() => {user.pacientes.map((a) => {clearSlot({ paciente: a })})}}/> 
//  const clearDisp = async() => { AsyncStorage.removeItem(name) };
