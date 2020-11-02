import React from 'react';
import {View, Text, TextInput, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import style from '../styles/qrStyle';

const Qr = () => {
  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: '50%',
          top: '50%',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}>
        <Text style={style.textoTitulo}>Evento</Text>
      </View>
    </View>
  );
};

export default Qr;
