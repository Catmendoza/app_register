import React, { useEffect, useState, useRef } from 'react';
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
import Carousel from 'react-native-anchor-carousel';
import storage from '@react-native-firebase/storage';
import { Icon } from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';

const Index = () => {
  const carouselRef = useRef(null);
  const [nombre, setNombre] = useState();

  const navigation = useNavigation();
  const [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => e.preventDefault());
    return;
  }, [navigation]);

  useEffect(() => {
    getEventos();
    getUser();
    return;
  }, []);

  const getUser = async () => {
    const usuarioActual = firebase.auth().currentUser;
    const datos = await firestore()
      .collection('users')
      .doc(usuarioActual.uid)
      .get();

    setNombre(datos.data().nombre);
  };

  const getEventos = async () => {
    const eventos = await firestore().collection('Eventos').get();

    const data = eventos.docs;

    const carrusel = [];

    for (let i = 0; i < data.length; i++) {
      const ref = data[i]._ref._documentPath._parts[1];
      carrusel.push({
        nombre: data[i].data().nombre,
        fecha: data[i].data().fecha,
        descripcion: data[i].data().descripcion,
        imagen: await storage().ref(`/eventos/${ref}.jpeg`).getDownloadURL(),
      });
    }

    setCarouselItems(carrusel);
  };

  const cerrarSesion = async () => {
    await auth().signOut();
  };

  return (
    <View style={style.container}>
      <View style={{ height: 350 }}>
        <Carousel
          data={carouselItems}
          renderItem={({ item, index }) => {
            const { backgroundColor } = item;
            return (
              <TouchableOpacity
                onPress={() => {
                  carouselRef.current.scrollToIndex(index);
                }}
                style={style.item}>
                <Image
                  source={{ uri: item.imagen }}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}></Image>
              </TouchableOpacity>
            );
          }}
          itemWidth={200}
          separatorWidth={10}
          ref={carouselRef}
          pagingEnable={false}
          minScrollDistance={20}
          containerWidth={370}
        />
      </View>
      <View
        style={{
          width: '100%',
          height: '20%',
          position: 'absolute',
          top: -20,
        }}>
        <View>
          <Icon
            name="sign-out"
            color="#0b4f7e"
            size={30}
            containerStyle={{ alignSelf: 'flex-end', top: 20, right: 20 }}
            onPress={cerrarSesion}
          />
        </View>
        <Text style={style.textoTitulo}>Nuevos eventos</Text>
      </View>
      <View
        style={{
          width: '100%',
          height: '20%',
          position: 'absolute',
          top: 305,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}>
        <Text style={style.textoTitulo}>Bienvenida/o {nombre}</Text>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>
          ¿A cual evento te gustaria asistir hoy?
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          backgroundColor: '#0b4f7e',
          height: '20%',
          position: 'absolute',
          top: 455,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
        }}>
        <Icon
          name="camera"
          color="white"
          size={100}
          containerStyle={{ alignSelf: 'center' }}
          onPress={() => navigation.navigate('Qr')}
        />
      </View>
    </View>
  );
};

export default Index;
