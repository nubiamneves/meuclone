import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { styles } from './styles'; 

function App () {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        SHEIN  BR
      </Text>
      <Text style={styles.loginbottom}>
        LOGIN               CADASTRE-SE
      </Text>
      <Text style={styles.localization}>
        Localização: Brasil
      </Text>

      <TextInput style= {styles.input}
      placeholder='Número de celular ou E-mail'>
      </TextInput>

      <TouchableOpacity style={styles.button}>

        <Text style={styles.buttomText}>
          Continuar
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default App 