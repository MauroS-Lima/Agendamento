import { Text, TouchableOpacity, View, Modal } from 'react-native';


function Butao({color='blue', text='test', onClick=null, size=10, borda=0, margen=2, top=null, }) {
  //console.log(teste)
  return(
    <TouchableOpacity
        onPress={onClick}
        style={{
          backgroundColor: color,
          padding: size,
          margin: margen,
          marginTop: top,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: borda, 

        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}> 
          {text}
        </Text>
      </TouchableOpacity>
  )
}

export default Butao;
