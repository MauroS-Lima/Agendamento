import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";



const Card = ({props, power}) => {
  const color =(props.active==='Disponível' ? "rgba(126,211,33,1)" : props.active==='Indisponível' ? '#eee' : 'red')
  const click = () => {
      props.clear(props);
      props.onToggle(props);
      power(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.bodyContent}>
        <Text style={styles.titleStyle}>
        {props.diaSem[props.day]} { props.hour < 6 ? <Text style={styles.time}>{props.hour+7}:30</Text>:<Text style={styles.time}>{props.hour+7}:00</Text>}
        </Text>
        <Text style={styles.subtitleStyle}>{props.active==='Disponível' ? null : 'Deseja substituir o paciente atual?'}</Text>
      </View>
      <View style={{padding: 8, backgroundColor: color, height: '20%', alignItems: "stretch"}}>
        <Text style={{lineHeight: 14,fontSize: 13, color: props.active==='Disponível' ? '#424242' : '#fff'}}>
          {props.active==='Disponível' ? props.active : 'ocupado'}
        </Text>
      </View>
      <View style={styles.actionBody}>
        <TouchableOpacity style={styles.actionButton1} onPress={() => power(false)}>
          <Text style={styles.actionText1}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton2} onPress={() =>  { click() } }>
          <Text style={styles.actionText2}>Alterar</Text>
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
    padding: 15,
    paddingTop: 20,
    justifyContent: "center",
    height: '60%',
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 24,
    color: "#000",
    paddingtop: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  subtitleStyle: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5,
    paddingBottom: 10
  },
  actionBody: {
    padding: 8,
    flexDirection: "row",
    height: 60,
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
