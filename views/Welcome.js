import React from 'react';
import {View, Image, TouchableHighlight, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import style from '../styles/welcomeStyle';

//HOOKS
const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <Text style={style.textoTitulo}>QRegister</Text>
      <Image source={require('../img/imgWelcome.png')} style={style.img} />
      <TouchableHighlight
        style={style.boton}
        underlayColor="no"
        onPress={() => navigation.navigate('Login')}>
        <Text style={style.textoBoton}>Inicia sesión</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Welcome;
