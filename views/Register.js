import React, { useState } from 'react';
import {
  View,
  Image,
  TouchableHighlight,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Icon } from 'react-native-elements';
import style from '../styles/registerStyle';

//HOOKS
const Register = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [cedula, setCedula] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasenia, setContrasenia] = useState('');
  const [contraseniaV, setContraseniaV] = useState('');
  const [loading, setLoading] = useState(false);
  const [ErrorNombre, setErrorNombre] = useState(false);
  const [ErrorCorreo, setErrorCorreo] = useState(false);
  const [Errorcontrasenia, setErrorCotrasenia] = useState(false);

  const navigation = useNavigation();
  const patronCorreo = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;

  const validacion = () => {
    if (nombre.length === 0) {
      setErrorNombre(true);
      return;
    } else setErrorNombre(false);
    if (correo.length === 0 || !correo.match(patronCorreo)) {
      setErrorCorreo(true);
      return;
    } else {
      setErrorCorreo(false);
    }
    if (contrasenia.length < 8) {
      setErrorCotrasenia(true);

      return;
    } else {
      if (contrasenia !== contraseniaV) {
        Alert.alert('Problemas', 'Las constraseñas no coinciden');
        return;
      } else {
        registerUser();
      }
    }
  };

  const registerUser = async () => {
    if (correo === '' && contrasenia === '') {
      Alert.alert('Enter details to signup!');
    } else {
      setLoading(true),
        await auth()
          .createUserWithEmailAndPassword(correo, contrasenia)
          .then(async (user) => {
            firestore()
              .collection('users')
              .doc(user.user.uid)
              .set({ nombre: nombre, apellido: apellido, cedula: cedula })
              .then(() => {
                setLoading(false);
              });
            console.log('Usuario registrado!');
            navigation.navigate('Login');
          })
          .catch((err) => console.log('error'));
    }
  };
  /* if (loading) {
    return (
      <View style={style.preloader}>
        <ActivityIndicator size="large" color="#9E9E9E" />
      </View>
    );
  }*/
  return (
    <View style={style.container}>
      <Icon
        name="chevron-left"
        color="#d8c7ce"
        size={35}
        containerStyle={{ alignSelf: 'flex-start' }}
        onPress={() => navigation.goBack()}
      />
      <KeyboardAvoidingView style={style.cuadroLogin} behavior="padding">
        <Text style={style.textoTitulo}>Crear cuenta</Text>
        <TextInput
          placeholder="Nombres"
          placeholderTextColor="#0b4f7e"
          style={style.textInput}
          value={nombre}
          onChangeText={(e) => setNombre(e)}
        />
        <TextInput
          placeholder="Apellidos"
          placeholderTextColor="#0b4f7e"
          style={style.textInput}
          value={apellido}
          onChangeText={(e) => setApellido(e)}
        />
        <TextInput
          placeholder="Cedula"
          placeholderTextColor="#0b4f7e"
          style={style.textInput}
          value={cedula}
          onChangeText={(e) => setCedula(e)}
        />
        <TextInput
          placeholder="Correo"
          keyboardType="email-address"
          placeholderTextColor="#0b4f7e"
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
        <TextInput
          placeholder="Verifique contraseña"
          secureTextEntry={true}
          placeholderTextColor="#0b4f7e"
          style={style.textInputPassword}
          value={contraseniaV}
          onChangeText={(e) => setContraseniaV(e)}
        />
        <TouchableHighlight
          style={style.boton}
          underlayColor="no"
          onPress={validacion}>
          <Text style={style.textoBoton}>Crear</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Register;
