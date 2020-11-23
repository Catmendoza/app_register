import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#0b4f7e',
    flex: 1,
  },
  textoTitulo: {
    color: '#0b4f7e',
    fontSize: 25,
    top: 15,
    fontWeight: 'bold',
  },
  cuadroLogin: {
    backgroundColor: '#e3e1e7',
    width: '100%',
    height: '95%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: '5%',
  },
  textInputPassword: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: '5%',
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
    marginTop: 12,
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
