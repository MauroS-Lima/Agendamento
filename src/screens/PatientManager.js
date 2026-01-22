import React, {useState, useContext} from 'react';
import {Text, View, Button, TextInput, Image} from 'react-native'
import AsyncStorage from "@react-native-community/async-storage"
import useNavigation from '@react-navigation/native'

import styles from '../styles';
import Api from '../Api';
import {UserContext} from '../contexts/UserContext';
import Butao from '../components/Butao'


function Manager({navigation}) {
  const {dispatch: userDispatch}=useContext(UserContext)
  const { data: user } = useContext(UserContext);
  
  const p = user.users.filter((u) => u.name===u.docName )
  const docs = p.map((x) => x.name)

  const [ usuario, setUsuario ] = useState('');
  const [ senha, setSenha ] = useState('');
  const [ psy, setPsy ] = useState(docs[0]);

  const LoginCreate= async() =>{

    //let json = await Api.logInCreate(usuario,senha,psy);

    if ( usuario != '' && senha != '' && psy != ''){
      if( ! user.users.some((u) => u.name===usuario ) ){ 
        userDispatch({
          type:'addUser',
          payload: { name: usuario, password: senha, docName: psy, token: 'valido' }
        })

    }else{alert('Usuario já existente!');}
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
      <Butao text={'Login'} onClick={() => LoginCreate(usuario, senha)}/>
    </View>
  );
}
//<Button title='home' onPress={() => navigation.navigate('MainTab')} />  debug
//<Button title='Admin' onPress={() => navigation.navigate('AdmHome')} />   debug
//<Butao text={'Login'} onClick={Login(usuario, senha)}>
export default Manager;
