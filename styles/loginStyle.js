import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#e3e1e7',
    flex: 1,
  },
  textoTitulo: {
    color: 'white',
    fontSize: 30,
    top: 20,
    fontWeight: 'bold',
  },
  cuadroLogin: {
    backgroundColor: '#0b4f7e',
    width: '100%',
    height: '75%',
    marginTop: '5%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: '15%',
  },
  textInputPassword: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: '10%',
  },
  boton: {
    width: '80%',
    height: 50,
    backgroundColor: '#d8c7ce',
    borderRadius: 15,
    marginTop: '8%',
  },
  textoBoton: {
    color: '#0b4f7e',
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
});
