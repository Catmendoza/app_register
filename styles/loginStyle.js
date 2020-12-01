import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#e3e1e7',
    flex: 1,
  },
  textoTitulo: {
    color: 'white',
    fontSize: 20,
    top: 20,
    fontWeight: 'bold',
  },
  flecha: {
    width: width * 0.09,
    height: height * 0.05,
    marginTop: width * 0.02,
    marginLeft: 10,
  },
  cuadroLogin: {
    backgroundColor: '#0b4f7e',
    width: width * 1,
    height: height * 0.75,
    marginTop: height * 0.05,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
  },
  textInput: {
    width: width * 0.8,
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: height * 0.06,
    color: '#0b4f7e',
  },
  textInputPassword: {
    width: width * 0.8,
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: height * 0.04,
  },
  boton: {
    width: width * 0.8,
    height: 50,
    backgroundColor: '#d8c7ce',
    borderRadius: 15,
    marginTop: height * 0.04,
  },
  textoBoton: {
    color: '#0b4f7e',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 12,
    fontWeight: 'bold',
  },
  textoPassword: {
    fontSize: 12,
    textAlign: 'right',
    color: 'white',
  },
});
