import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons'; 
import { Pag1 } from './src/screen/Pag1';
import { Pag2 } from './src/screen/Pag2';

function App () {

  return (

      <Pag2/>

  )

  // return (
  //   <View style={styles.container}>
  //     <View>
  //     <AntDesign name="close" size={24} color="black" />
  //     <Text style={styles.title}>
  //       SHEIN  BR
  //     </Text>
  //     </View>
  //     <Text style={styles.loginbottom}>
  //       LOGIN               CADASTRE-SE
  //     </Text>
  //     <Text style={styles.localization}>
  //       Localização: Brasil
  //     </Text>

  //     <TextInput style= {styles.input}
  //     placeholder='Número de celular ou E-mail'>
  //     </TextInput>

  //     <TouchableOpacity style={styles.button}>

  //       <Text style={styles.buttomText}>
  //         CONTINUAR
  //       </Text>
  //     </TouchableOpacity>
  //   </View>
  // )
}

export default App 