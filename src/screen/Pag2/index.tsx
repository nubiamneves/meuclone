import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import lua from '../../assets/lua.webp'

export const Pag2= () => {

    return (
      <View>
        <View>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text>
            Meu artigo de teste
        </Text>
       </View>
       <Image source={lua}/>
      </View>
    )
  }