import React, {useState, useContext} from 'react';
import {Text, View, Button, TextInput} from 'react-native'
import AsyncStorage from "@react-native-community/async-storage"

import styles from '../styles';
import Api from '../Api';
import {UserContext} from '../contexts/UserContext';

async function Login(usuario, senha){
  console.log('Marcador 1')
  //let json = await Api.signIn(usuario,senha);
  if ( usuario != '' && senha != ''){
    if(json.token){
      await AsyncStorage.setitem('token', json.token);

      userDispatch({
        type: 'setAvatar',
        payload:{
          avatar: json.data.avatar
        }
      });

      navigation.reset({routes:[{name:'Home'}]})
      
    }else{alert('Usuario e/ou senha icorretos');}
  }else {
    alert('Preencha todos os campos!')
  }
}

function SignIn({navigation}) {
  const {dispatch: userDispatch} = useContext(UserContext)
  const [ usuario, setUsuario ] = useState('');
  const [ senha, setSenha ] = useState('');
  const [ logado, setLogado ] = useState(false)
  if (!logado){
    return (
      <View style = {styles.container}>
        <Text>Login</Text>
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
      </View>
    );
  }
}

export default SignIn;

