import React, {useState, useContext} from 'react';
import {Text, View, Button, TextInput, Image} from 'react-native'
import AsyncStorage from "@react-native-community/async-storage"

import styles from '../styles';
import Api from '../Api';
import {UserContext} from '../contexts/UserContext';
import users from '../MockData/Users'; //Temp



async function Login(usuario, senha){
  //console.log('Marcador 1')
  //let json = await Api.signIn(usuario,senha);
  
  if ( usuario != '' && senha != ''){

    if(u){

      setUser(u)

      navigation.reset({routes:[{name:'Home'}]})
      
    }else{alert('Usuario e/ou senha icorretos');}
  }else {
    alert('Preencha todos os campos!')
  }
}


function SignIn({navigation}) {
  const {dispatch: userDispatch} = useContext(UserContext)
  const [user, setUser] = useState(null);
  const [ usuario, setUsuario ] = useState('');
  const [ senha, setSenha ] = useState('');
  const [ logado, setLogado ] = useState(false)
  if (!logado){
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
}

export default SignIn;
