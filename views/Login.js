import React from 'react';
import {View, Image, TouchableHighlight, Text, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import style from '../styles/loginStyle';

//HOOKS
const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <Text style={style.textoTitulo}>Iniciar sesión</Text>
      <View style={style.cuadroLogin}>
        <TextInput
          placeholder="Correo"
          placeholderTextColor="black"
          style={style.textInput}
        />
        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="black"
          style={style.textInput}
        />

        <TouchableHighlight
          style={style.boton}
          underlayColor="no"
          onPress={() => navigation.navigate('Index')}>
          <Text style={style.textoBoton}>Iniciar</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Login;
