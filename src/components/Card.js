import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";



const Card = ({props}) => {
  const color =(props.subject==='Disponível' ? "rgba(126,211,33,1)" : props.subject==='Indisponível' ? '#eee' : 'red')
  
  return (
    <View style={styles.container}>
      <View style={styles.bodyContent}>
        <Text style={styles.titleStyle}>{props.data}</Text>
        <Text style={styles.subtitleStyle}>{props.hora}</Text>
      </View>
      <View style={{padding: 8, backgroundColor: color, height: 30, alignItems: "stretch"}}>
        <Text style={styles.bodyText}>
          {props.subject}
        </Text>
      </View>
      <View style={styles.actionBody}>
        <TouchableOpacity style={styles.actionButton1}>
          <Text style={styles.actionText1}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton2}>
          <Text style={styles.actionText2}>Remarcar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "rgba(155,155,155,1)",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden",
    alignItems: "stretch",
    justifyContent: "flex-end",
    width: 230
    
  },
  bodyContent: {
    padding: 15,
    paddingTop: 20,
    justifyContent: "center",
    height: 70,
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 6
  },
  subtitleStyle: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5,
    paddingBottom: 6
  },
  bodyText: {
    lineHeight: 14,
    fontSize: 13,
    color: "#424242",
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
    height: 36,
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
    height: 36,
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
