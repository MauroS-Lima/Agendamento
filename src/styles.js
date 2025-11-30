import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#63c2d1",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: "80%",
    backgroundColor: "#fff",
},
  logo: {
    width: 100,
    height: 90,
    marginBottom: 20,
  },
  scroller: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#fff",
    padding:10,
    justifyContent: "center",
    
  },
  scrollerTab: {
    flex: 1,
    backgroundColor: "#63c2d1",
    padding:20,
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#fff',
    justifyContent: "center",
  },
  time: {
    fontSize: 11, 
    textAlign: 'center'
  },
  day: {
    borderWidth: 1,
    marginRight: 8,
    padding: 4,
    width: 80,
    
  },
  toggle: {
    marginVertical: 2,
    padding: 3,
    borderRadius: 4,
  },
});
