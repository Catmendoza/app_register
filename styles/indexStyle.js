import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },
  textoTitulo: {
    color: '#0b4f7e',
    fontSize: 30,
    marginRight: 10,
    marginTop: 35,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },

  item: {
    color: 'white',

    backgroundColor: '#00000060',
    borderRadius: 10,
    marginTop: 50,
    width: '100%',
    height: '40%',
  },

  separator: {
    width: 10,
  },
  itemContorno: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 10,
    width: 200,
    height: 120,
  },
  imagenItem: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 10,
  },
  textoPorcentaje: {
    fontSize: 50,
    textAlign: 'center',
    color: 'white',
    marginTop: 40,
  },
});
