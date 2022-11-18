import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { styles } from './styles'; 
import { Ionicons } from '@expo/vector-icons';
import lua from '../../assets/lua.webp'

export const Pag2= () => {

    return (
      <View style={styles.container}>
        <View>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.title}>
            Meu artigo de teste
        </Text>
        <Text style={styles.description}>
          Uma vez que o relatório é aprovado, você receberá uma 
          recompensa de 20 pontos. Se o seu relatório for identificado
          como de alta qualidade, você receberá 100 pontos, e aumentará
          as chances de receber um novo artigo de teste.
        </Text>
        <Text style={styles.subtitle}>
        Meu pedido(1)               Meu relatório(0)
      </Text>
      <Text style={styles.date}>
        09/17/21 
      </Text>
      <Text style={styles.situacao}>
      ° Falhou
      </Text>
       </View>
       <Image style={styles.image}
       source={lua}/>
       <Text style={styles.label}>
        Luz decorativa em Forma de Lua
        Tamanho:one-size
       </Text>
      </View>
    )
  }