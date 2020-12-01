import React, { useState } from 'react';
import {
  Image,
  Text,
  View,
  Linking,
  TouchableHighlight,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CameraKitCameraScreen } from 'react-native-camera-kit';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { Icon } from 'react-native-elements';
import style from '../styles/qrStyle';

const Qr = () => {
  const [qrvalue, setQrvalue] = useState('');
  const [opneScanner, setOpneScanner] = useState(false);

  const navigation = useNavigation();

  const onOpenlink = () => {
    Linking.openURL(qrvalue);
  };

  const registrar = async () => {
    await firestore()
      .collection('Asistencia')
      .add({
        hora_registro: new Date(),
        idUSuario: auth().currentUser.uid,
        idEvento: qrvalue,
      })
      .then(() => Alert.alert('Registrado'));
  };

  const onBarcodeScan = async (qrvalue) => {
    const data = await firestore().collection('Asistencia').get();

    const eventos = data.docs;

    let registrado = false;

    for (let i = 0; i < eventos.length; i++) {
      if (
        eventos[i].data().idEvento === qrvalue &&
        eventos[i].data().idUsuario === auth().currentUser.uid
      ) {
        setOpneScanner(false);

        Alert.alert(
          'Regresar',
          '¿Estas seguro de que no estas registrado?',
          [
            {
              text: 'Reintentar',
              onPress: () => setOpneScanner(true),
              style: 'cancel',
            },
            {
              text: 'Salir',
              onPress: () => navigation.goBack(),
            },
          ],
          { cancelable: false },
        );

        registrado = true;
      }
    }

    if (!registrado) {
      setQrvalue(qrvalue);
      setOpneScanner(false);
    }
  };

  const onOpneScanner = () => {
    if (Platform.OS === 'android') {
      async function requestCameraPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Camera Permission',
              message: 'App needs permission for camera access',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            setQrvalue('');
            setOpneScanner(true);
          } else {
            alert('CAMERA permission denied');
          }
        } catch (err) {
          alert('Camera permission err', err);
          console.warn(err);
        }
      }

      requestCameraPermission();
    } else {
      setQrvalue('');
      setOpneScanner(true);
    }
  };

  return (
    <View style={style.container}>
      <Icon
        name="chevron-left"
        color="#0b4f7e"
        size={35}
        containerStyle={{ alignSelf: 'flex-start' }}
        onPress={() => navigation.goBack()}
      />
      {opneScanner ? (
        <View style={{ flex: 1, width: 200, height: 200 }}>
          <CameraKitCameraScreen
            showFrame={false}
            scanBarcode={true}
            laserColor={'blue'}
            frameColor={'yellow'}
            colorForScannerFrame={'black'}
            onReadCode={(event) =>
              onBarcodeScan(event.nativeEvent.codeStringValue)
            }
          />
        </View>
      ) : (
        <View style={style.container}>
          <Text style={style.textoTitulo}>
            Escanea el QR del evento al que quieres asistir
          </Text>
          <Text style={style.textStyle}>
            {qrvalue ? 'Scanned Result: ' + qrvalue : ''}
          </Text>
          {qrvalue.includes('https://') ||
          qrvalue.includes('http://') ||
          qrvalue.includes('geo:') ? (
            <TouchableHighlight onPress={onOpenlink}>
              <Text style={style.textLinkStyle}>
                {qrvalue.includes('geo:') ? 'Open in Map' : 'Open Link'}
              </Text>
            </TouchableHighlight>
          ) : null}
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <TouchableHighlight
              onPress={onOpneScanner}
              style={{ width: 100, backgroundColor: '#0b4f7e', margin: 20 }}>
              <Text style={style.buttonTextStyle}>Abrir lector</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={registrar}
              style={{ width: 100, backgroundColor: '#0b4f7e', margin: 20 }}>
              <Text style={style.buttonTextStyle}>Registrar</Text>
            </TouchableHighlight>
            <Image source={require('../img/persona.png')} style={style.img} />
          </View>
        </View>
      )}
    </View>
  );
};

export default Qr;
