import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#0b4f7e',
    flex: 1,
    justifyContent: 'center',
  },
  textoTitulo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    width: width * 0.8,
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: height * 0.02,
    alignSelf: 'center',
  },
  boton: {
    width: width * 0.8,
    height: 50,
    backgroundColor: 'transparent',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#aaf1ff',
    marginTop: height * 0.02,
    alignSelf: 'center',
  },
  textoBoton: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: height * 0.015,
    fontWeight: 'bold',
  },
});
