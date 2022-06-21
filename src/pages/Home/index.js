import React, { useState, useCallback, useEffect } from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Moviments from "../../components/Moviments";
import Actions from "../../components/Actions";

export default function Home() {
  const [data, setData] = useState([]);

  const { getItem } = useAsyncStorage("@financas:moviments")

  async function handleFetchData(){
    const response = await getItem();
    const data = response ? JSON.parse(response) : [];
    setData(data);
  }

  useEffect(() =>{
    handleFetchData();
  }, []);

  useEffect(() =>{
    handleFetchData();
  }, [data]);

  // useFocusEffect(useCallback(() =>{
  //   handleFetchData();
  // }, []));

  return (
    <View style={styles.container}>
      <Header name={"Henrique de Freitas"} />
      <Balance saldo={"17.000,00"} gastos={"5.000,00"} />

      <Actions />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Moviments data={item} />}
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
  },
})