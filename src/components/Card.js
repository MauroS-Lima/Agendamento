import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";



const Card = ({props}) => {
  {props.subject === 'clear' }
  return (
    <View style={styles.container}>
      <View style={styles.bodyContent}>
        <Text style={styles.titleStyle}>{props.data}</Text>
        <Text style={styles.subtitleStyle}>{props.hora}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          Disponivel
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
    justifyContent: "flex-end"
  },
  bodyContent: {
    padding: 16,
    paddingTop: 24,
    justifyContent: "center",
    height: 130,
    alignItems: "center"
  },
  titleStyle: {
    fontSize: 24,
    color: "#000",
    paddingBottom: 12
  },
  subtitleStyle: {
    fontSize: 14,
    color: "#000",
    lineHeight: 16,
    opacity: 0.5
  },
  body: {
    padding: 16,
    paddingTop: 8,
    backgroundColor: "rgba(126,211,33,1)",
    height: 33,
    alignItems: "stretch",
    
  },
  bodyText: {
    lineHeight: 20,
    fontSize: 14,
    color: "#424242",
    flexWrap: "wrap"
  },
  actionBody: {
    padding: 8,
    flexDirection: "row",
    height: 82,
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
