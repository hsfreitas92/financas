import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Moviments from "../../components/Moviments";
import Actions from "../../components/Actions";

const list = [
  {
    id: 1,
    label: 'Boleto Luz',
    value: '300,50',
    date: '17/09/2022',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'Pix cliente X',
    value: '1.500,00',
    date: '27/10/2022',
    type: 1 //entradas
  },
  {
    id: 3,
    label: 'Salario',
    value: '7.000,00',
    date: '01/09/2022',
    type: 1 //entradas
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name={"Henrique de Freitas"} />
      <Balance saldo={"17.000,00"} gastos={"5.000,00"} />

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({item}) => <Moviments data={item} /> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
})