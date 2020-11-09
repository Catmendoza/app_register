import React, { useState } from 'react';
import { View, Image, TouchableHighlight, Text, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import style from '../styles/loginStyle';

//HOOKS
const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contrasenia, setContrasenia] = useState('');

  const navigation = useNavigation();
  const patronCorreo = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;

  const validacion = () => {
    if (correo.match(patronCorreo)) {
      console.log('gucci');
      login();
    } else {
      console.log('error');
    }
  };

  const login = async () => {
    await auth()
      .signInWithEmailAndPassword(correo, contrasenia)
      .then((user) => {
        console.log('iniciado');
      })
      .catch((err) => {
        console.log('No existe');
      });
  };

  return (
    <View style={style.container}>
      <Text style={style.textoTitulo}>Iniciar sesión</Text>
      <View style={style.cuadroLogin}>
        <TextInput
          placeholder="Correo"
          keyboardType="email-address"
          placeholderTextColor="black"
          style={style.textInput}
          value={correo}
          onChangeText={(e) => setCorreo(e)}
        />
        <TextInput
          placeholder="Contraseña"
          secureTextEntry={true}
          placeholderTextColor="black"
          style={style.textInput}
          value={contrasenia}
          onChangeText={(e) => setContrasenia(e)}
        />

        <TouchableHighlight
          style={style.boton}
          underlayColor="no"
          onPress={validacion}>
          <Text style={style.textoBoton}>Iniciar</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Login;
