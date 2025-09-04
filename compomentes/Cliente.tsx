import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';


interface PropCliente {
  id: number;
  nome: string;
  cpf: string;
  saldo: number;
}

export default function Cliente({ id, nome, cpf, saldo }: PropCliente) {
  return (
     

    <View style={styles.card}>
      <Text style={styles.text}>Cod.: {id}</Text>
      <Text style={styles.text}>Nome: {nome}</Text>
      <Text style={styles.text}>CPF: {cpf}</Text>
      <Text style={styles.text}>Saldo: R$ {saldo}</Text>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.btnExcluir}>
          <Text style={styles.btnText}>Excluir</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnEditar}>
          <Text style={styles.btnText}>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    width: '90%',
    alignSelf: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  btnExcluir: {
    backgroundColor: '#a1030bff',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginRight: 5,
    alignItems: 'center',
  },
  btnEditar: {
    backgroundColor: '#2980b9',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginLeft: 5,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
