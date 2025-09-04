import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from  '../compomentes/Api';

import Cliente from  '../compomentes/Cliente';

export default function ListarCliente() {
  const [dados, setDados] = useState <any[]>([]);

  async function BuscaCliente(){
    const resposta = await api.get('cliente');
    setDados(resposta.data);

  }

  useEffect(()=>{
    BuscaCliente()}); // falta a o flatlist 

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/img/backV01.jpg')}
        style={styles.imgFundo}
        imageStyle={styles.opacityImage}
      >
        <TouchableOpacity
          style={styles.btnCad}
          
        >
          <Text style={styles.cadastrar}>Cadastrar novo Cliente</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.listar}>Listar Cliente</Text>

          

          
          

          
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
    resizeMode: 'cover', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  opacityImage: {
    opacity: 0.3, 
  },
  btnCad: {
    backgroundColor: 'purple',
    width: '80%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    
  },
  cadastrar: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  listar: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
    textAlign: 'center',
  },
});
