import { Text, TouchableOpacity, View, Modal } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function Butao({color='white', text='arrow-left-drop-circle', onClick=null, size=0, margen=5, }) {
  //console.log(teste)
  return(
    <TouchableOpacity
        onPress={onClick}
        style={{
          padding: size,
          margin: margen,
          marginTop: 0,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '100%',
          backgroundColor: "#63c2d1"
        }}
      >
        <MaterialCommunityIcons name={text} color={color} size={36} />
      </TouchableOpacity>
  )
}

export default Butao;
