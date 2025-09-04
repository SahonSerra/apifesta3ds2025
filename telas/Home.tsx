import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

import { useNavigation } from '@react-navigation/native'; 

export default function Home() {

  const navigation = useNavigation();

  return (

    
    <View style={styles.container}>

      <ImageBackground
        source={require('../assets/img/backV02.jpg')}
        style={styles.imgFundo}
        imageStyle={styles.opacityImage}
        
      >
        <Text style={styles.titulo}>App Festa</Text>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnClie}
          onPress={() => navigation.navigate('ListarCliente' as never)}
          >
            <Text style={styles.cliente}>Clientes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnUsi}>
            <Text style={styles.usuario}>Usuários</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

  imgFundo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  opacityImage: {
    opacity: 0.5,
  },

  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 30,
  },

  btnContainer: {
    width: '100%',
    alignItems: 'center',
  },

  cliente: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },

  usuario: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },

  btnClie: {
    backgroundColor: 'purple',
    width: '80%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 20,
  },

  btnUsi: {
    backgroundColor: 'purple',
    width: '80%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 20,
     
  },
});
