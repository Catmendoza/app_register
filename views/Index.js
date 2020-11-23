import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import style from '../styles/indexStyle';

const Index = () => {
  const navigation = useNavigation();

  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return date + '-' + month + '-' + year; //format: dd-mm-yyyy;
  };

  const cerrarSesion = async () => {
    await auth().signOut();
  };

  return (
    <View style={style.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={cerrarSesion}
        style={style.touchableOpacityStyle}>
        <Image
          source={require('../img/sign_out.png')}
          style={style.floatingButtonStyle}
        />
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Text style={style.textoTitulo}>Oct 26</Text>
        <TextInput
          style={{
            width: 150,
            height: 40,
            borderRadius: 10,
            backgroundColor: '#c3c3c3',
          }}>
          <Text>Buscar</Text>
        </TextInput>
      </View>

      <View
        style={{
          width: '50%',
          height: '40%',
          backgroundColor: '#0b4f7e',
          marginTop: 10,
          borderRadius: 20,
        }}>
        <Text style={{ marginTop: 200, marginLeft: 10 }}>Evento día lunes</Text>
      </View>

      <View>
        <ScrollView>
          <Text style={style.textoTitulo}>Eventos</Text>

          <TouchableHighlight
            underlayColor="no"
            onPress={() => navigation.navigate('Qr')}
            style={{
              width: 200,
              height: 100,
              backgroundColor: '#c3c3c3',
              borderRadius: 20,
            }}>
            <Image
              source={require('../img/img2.jpeg')}
              style={{ width: 80, height: 80, marginTop: 10, marginLeft: 20 }}
            />
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="no"
            onPress={() => navigation.navigate('Qr')}
            style={{
              width: 200,
              height: 100,
              backgroundColor: '#c3c3c3',
              borderRadius: 20,
              marginTop: 10,
            }}>
            <Image
              source={require('../img/img3.jpeg')}
              style={{ width: 80, height: 80, marginTop: 10, marginLeft: 20 }}
            />
          </TouchableHighlight>
        </ScrollView>
      </View>
    </View>
  );
};

export default Index;
