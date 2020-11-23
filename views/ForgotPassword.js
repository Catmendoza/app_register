import React, { useState } from 'react';
import {
  TextInput,
  View,
  TouchableHighlight,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import auth, { firebase } from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import style from '../styles/forgotPasswordStyle';

const ForgotPassword = () => {
  const [correo, setCorreo] = useState('');
  const patronCorreo = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;

  const navigation = useNavigation();

  const validacion = () => {
    if (correo.match(patronCorreo)) {
      console.log('gucci');
      forgotPassword();
    } else {
      console.log('error');
    }
  };

  const forgotPassword = async () => {
    await auth()
      .sendPasswordResetEmail(correo)
      .then((user) => {
        alert('Por favor revisa tu correo electronico...');
      })
      .catch((err) => {
        console.log('No existe');
        alert('El correo no existe');
      });
  };

  return (
    <View style={style.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Login')}>
        <Image
          source={require('../img/flecharosa.png')}
          style={{ marginLeft: 10 }}
        />
      </TouchableOpacity>
      <Text style={style.textoTitulo}>Ingresa tu correo:</Text>
      <TextInput
        placeholder="Correo"
        keyboardType="email-address"
        placeholderTextColor="black"
        style={style.textInput}
        value={correo}
        onChangeText={(e) => setCorreo(e)}
      />
      <TouchableHighlight
        style={style.boton}
        underlayColor="no"
        onPress={validacion}>
        <Text style={style.textoBoton}>Enviar</Text>
      </TouchableHighlight>
    </View>
  );
};

export default ForgotPassword;
