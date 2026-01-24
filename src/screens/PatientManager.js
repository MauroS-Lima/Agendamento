import React, {useState, useContext} from 'react';
import { Text, View, ScrollView, TextInput, Modal } from 'react-native'
import AsyncStorage from "@react-native-community/async-storage"
import useNavigation from '@react-navigation/native'

import styles from '../styles';
import Api from '../Api';
import {UserContext} from '../contexts/UserContext';
import Butao from '../components/Butao'


function Manager({navigation}) {
  const {dispatch: userDispatch}=useContext(UserContext)
  const { data: user } = useContext(UserContext);

  const d = user.users.filter((u) => u.name === u.docName )
  const docs = d.map((x) => x.name)

  const p = user.users.filter((u) => u.name !== u.docName )
  const pacs = p.map((x) => x.name)

  const [ nome, setNome ] = useState('');
  const [ senha, setSenha ] = useState('');
  const [ psy, setPsy ] = useState(docs[0]);
  const [ usuario, setUsuario ] = useState(pacs[0]);
  const [ modal, setModal ] = useState(false);

  const LoginCreate = async() => {

    //let json = await Api.logInCreate(usuario,senha,psy);

    if ( nome != '' && senha != '' && psy != ''){
      
      if( ! user.users.some((u) => u.name===nome ) ){ 
        Users = [...user.users, { name: nome, password: senha, docName: psy, token: 'valido' }]        
        userDispatch({
          type:'addUser',
          payload: Users
        })
        setNome('')
        setSenha('')
        setPsy(docs[0])
        await AsyncStorage.setItem('users', JSON.stringify(Users))
        alert('Usuario adicionado!')

    }else{alert('Usuario já existente!');}
  }else {
    alert('Preencha todos os campos!') 
  }
}

const loginDelete = async() => {
  userDispatch({
    type:'removeUser', payload: { name: usuario }
    })
  await AsyncStorage.setItem('users', JSON.stringify(user.users)) 
}

  return (
    <View style = {{flex: 1, backgroundColor: "#63c2d1", justifyContent: "center"}}>

      <View style = {{ alignItems: "center", justifyContent: "center", marginTop: 20 }}>
        <Text style={styles.header}>Adicionar usuário:</Text>      
        <ScrollView horizontal style={{ flexDirection: 'row', padding :5, }}> <Text style={styles.text}>Psicólogo(a): </Text> 
        {docs.map((a) => ( <Butao text={a} onClick={() => setPsy(a)} color={ a===psy ? 'blue' : '#888' } size={6} /> ))} 
        </ScrollView>
        <TextInput 
          style={styles.input}
         placeholder='nome'
          placeholderTextColor= '#888'
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder='Senha'
          placeholderTextColor= '#888'
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />
        <Butao text={'Adicionar'} onClick={() => LoginCreate()}/>
      </View>

    <View style = {{ alignItems: "center", justifyContent: "center", marginTop: 20 }}>
        <Text style={styles.header}>Remover usuário:</Text>
        <ScrollView horizontal style={{ flexDirection: 'row', padding :5, marginBottom: 10 }}> x 
        {pacs.map((a) => ( <Butao text={a} onClick={() => setUsuario(a)} color={ a === usuario ? 'black' : 'grey' } size={6} /> ))} 
        </ScrollView> <Butao text={'Excluir'} color='red' onClick={() => loginDelete() }/>
      </View>

    </View>
  );
}
//<Button title='home' onPress={() => navigation.navigate('MainTab')} />  debug
//<Button title='Admin' onPress={() => navigation.navigate('AdmHome')} />   debug
//<Butao text={'Login'} onClick={Login(usuario, senha)}>
export default Manager;
