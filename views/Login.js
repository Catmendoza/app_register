import React, { useState } from 'react';
import {
  View,
  Image,
  TouchableHighlight,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth, { firebase } from '@react-native-firebase/auth';
import style from '../styles/loginStyle';

//HOOKS
const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contrasenia, setContrasenia] = useState('');

  const navigation = useNavigation();
  const patronCorreo = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
  goToForgotPassword = () => navigation.navigate('ForgotPassword');

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
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Welcome')}>
        <Image
          source={require('../img/flecha-izquierda.png')}
          style={{ marginTop: 5, marginLeft: 10 }}
        />
      </TouchableOpacity>
      <Image
        source={require('../img/logoGrande.png')}
        style={{ width: 250, height: 150, alignSelf: 'center' }}
      />
      <KeyboardAvoidingView style={style.cuadroLogin} behavior="padding">
        <Text style={style.textoTitulo}>Iniciar sesión</Text>
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
          placeholderTextColor="#0b4f7e"
          style={style.textInputPassword}
          value={contrasenia}
          onChangeText={(e) => setContrasenia(e)}
        />
        <TouchableHighlight
          underlayColor="no"
          style={{ alignSelf: 'flex-end', marginRight: 38 }}
          onPress={goToForgotPassword}>
          <Text style={style.textoPassword}>¿Olvidaste tu contraseña?</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={style.boton}
          underlayColor="no"
          onPress={validacion}>
          <Text style={style.textoBoton}>Iniciar</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
