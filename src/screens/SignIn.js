import React, {useState, useContext} from 'react';
import {Text, View, Button, TextInput, Image} from 'react-native'
import AsyncStorage from "@react-native-community/async-storage"
import useNavigation from '@react-navigation/native'

import styles from '../styles';
import Api from '../Api';
import {UserContext} from '../contexts/UserContext';
import users from '../MockData/Users'; //Temp
import Schedule from '../MockData/Schedule'; //Temp






function SignIn({navigation}) {
  const [ usuario, setUsuario ] = useState('');
  const [ senha, setSenha ] = useState('');

  const Login= async() =>{
  //let json = await Api.signIn(usuario,senha);

  if ( usuario != '' && senha != ''){
    if(users.some((u)=>u.name===usuario && u.password===senha)){ 
      const data = users.filter((u)=>u.name===usuario && u.password===senha)
      await AsyncStorage.setItem('name', data.name)
      await AsyncStorage.setItem('token', data.token)
      await AsyncStorage.setItem('docName', data.docName)
      navigation.reset({routes:[{name:'MainTab'}]})
      //userDispatch({
      //  type:'setUser',
      //  payload: {user: data.user}
      //})

      
      
    }else{alert('Usuario e/ou senha icorretos');}
  }else {
    alert('Preencha todos os campos!')
  }
}

  return (
    <View style = {styles.container}>
      <Image source={require('../assets/Clinica.jpg')} style={{width: 150, height:150, borderRadius:75, marginBottom:50}}/>
        
      <TextInput 
        style={styles.input}
        placeholder='Usuário'
        placeholderTextColor= '#888'
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder='Senha'
        placeholderTextColor= '#888'
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <Button title='Login' onPress={()=>{Login(usuario, senha)}} />
      <Button title='home' onPress={() => navigation.navigate('MainTab')} />
      <Button title='Admin' onPress={() => navigation.navigate('AdmHome')} />
    </View>
  );
}

export default SignIn;
