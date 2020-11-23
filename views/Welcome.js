import React from 'react';
import { View, Image, TouchableHighlight, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from '../styles/welcomeStyle';

//HOOKS
const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <Image
        source={require('../img/logoBlancoLargo.png')}
        style={style.logo}
      />
      <View>
        <View
          style={{
            backgroundColor: '#d8c7ce',
            width: 20,
            height: 90,
            marginBottom: 20,
          }}></View>
        <TouchableHighlight
          style={style.boton}
          underlayColor="no"
          onPress={() => navigation.navigate('Login')}>
          <Text style={style.textoBoton}>Iniciar sesión</Text>
        </TouchableHighlight>
        <View style={style.transBoton1}></View>
        <View style={style.transBoton2}></View>
      </View>
      <View>
        <View
          style={{
            backgroundColor: '#d4ebec',
            width: 20,
            height: 90,
            alignSelf: 'flex-end',
          }}></View>
        <TouchableHighlight
          style={style.botonSingUp}
          underlayColor="no"
          onPress={() => navigation.navigate('Register')}>
          <Text style={style.textoBoton}>Registrarme</Text>
        </TouchableHighlight>
        <View style={style.transBotonSingUp1}></View>
        <View style={style.transBotonSingUp2}></View>
      </View>

      <Image source={require('../img/persona.png')} style={style.img} />

      <Text style={style.texto}>Bienvenidos</Text>
    </View>
  );
};

export default Welcome;
