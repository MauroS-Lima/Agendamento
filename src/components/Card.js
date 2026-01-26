import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const action = ['Alterar', 'Excluir', 'Reagendar']

const Card = ({props}) => {
  const color =(props.active==='Disponível' ? "rgba(126,211,33,1)" : props.active==='Indisponível' ? '#eee' : 'red')
  const click0 = () => {
      props.clear(props);
      props.onToggle(props);
      props.power(false);
  }
  const click1 = () => {
    props.onToggle(props);
    props.power(false);
  }
  
  const title = () => {if( props.type === 0 )return (
    <Text style={styles.titleStyle}>
      {props.diaSem[props.day]} { props.hour < 6 ? <Text style={styles.time}>{props.hour+7}:30</Text>:<Text style={styles.time}>{props.hour+7}:00</Text>}
    </Text>)
    }
  const subTitle = () => {if( props.type === 0 ) return (
    <Text style={styles.subtitleStyle}>{props.active==='Disponível' ? null : 'Deseja substituir o paciente atual?'}</Text>
  )}
  const faixa = () => {if( props.type === 0 ) return (
    <View style={{padding: 8, backgroundColor: color, height: '20%', alignItems: "stretch"}}>
      <Text style={{alignText: 'center',fontSize: 13, color: props.active==='Disponível' ? '#424242' : '#fff'}}>
        {props.active==='Disponível' ? props.active : 'ocupado'} 
      </Text>
    </View>)
    }
  const confirm = () => {if( props.type === 1 ) return (
    <Text style={styles.confirmStyle}>Deseja excluir o(a) paciente {props.active}?</Text>
  )}

  const reagendar = () => {if( props.type === 2 ) return (
    <Text style={styles.confirmStyle}>Deseja Reagendar para {'\n'}{props.diaSem[props.day]} {props.hour + 7}{props.hour < 6 ? ':30' : ':00' }?</Text>
  )}


  return (
    <View style={styles.container}>
      <View style={styles.bodyContent}>
        {title()}
        {subTitle()}
        {confirm()}
        {reagendar()}
      </View>
      {faixa()}
      <View style={styles.actionBody}>
        <TouchableOpacity style={styles.actionButton1} onPress={() => props.power(false)}>
          <Text style={styles.actionText1}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton2} onPress={() =>  { props.type === 0 ? click0() : click1() } }>
          <Text style={styles.actionText2}>{action[props.type]}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

//onPress={() => prop.onToggle(prop)}


const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "rgba(155,155,155,1)",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    alignSelf: "center",
    top: '35%',
    shadowOffset: {
      width: -5,
      height: 5
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden",
    alignItems: "stretch",
    justifyContent: "flex-end",
    width: '60%',
    height: '20%'
    
  },
  bodyContent: {
    justifyContent: "center",
    height: '40%',
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 24,
    color: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  subtitleStyle: {
    fontSize: 14,
    color: "#000",
    opacity: 0.5,
  },
  confirmStyle: {
    fontSize: 16,
    margin: 5,
    color: "#000",
    textAlign: 'center',
    justifyContent: "center",
  },
  actionBody: {
    padding: 8,
    flexDirection: "row",
    backgroundColor: "rgba(74,144,226,1)",
    justifyContent: "space-around", 
    alignItems: "center"
  },
  actionButton1: {
    padding: 8,
    backgroundColor: "#fff",
    borderRadius: 20
  },
  actionText1: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  },
  actionButton2: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: "#fff"
  },
  actionText2: {
    fontSize: 14,
    color: "#000",
    opacity: 0.9
  }
});

export default Card;
