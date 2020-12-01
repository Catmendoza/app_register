import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#0b4f7e',
    flex: 1,
  },
  textoTitulo: {
    color: '#0b4f7e',
    fontSize: 20,
    top: height * 0.01,
    fontWeight: 'bold',
  },
  cuadroLogin: {
    backgroundColor: '#e3e1e7',
    width: width * 1,
    height: height * 0.95,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
  },
  textInput: {
    width: width * 0.8,
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: height * 0.02,
    color: '#0b4f7e',
  },
  textInputPassword: {
    width: width * 0.8,
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: height * 0.02,
  },
  boton: {
    width: '80%',
    height: 50,
    backgroundColor: '#0b4f7e',
    borderRadius: 15,
    marginTop: '6%',
  },
  textoBoton: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: height * 0.02,
    fontWeight: 'bold',
  },
  textoPassword: {
    fontSize: 15,
    textAlign: 'right',
    color: 'white',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
