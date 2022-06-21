import React, { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { EyeOff } from "react-native-feather";
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

export default function Moviments({ data }) {
  const [showValue, setShowValue] = useState(false);

  const { getItem, setItem } = useAsyncStorage("@financas:moviments")

  async function handleRemove(id){
    const response = await getItem();
    const previousData = response ? JSON.parse(response) : [];

    const data = previousData.filter((item) => item.id !== id);
    setItem(JSON.stringify(data));
  }

  return (
    <TouchableOpacity style={styles.container} onPress={ () => setShowValue(!showValue) }>
      <Text style={styles.date}>{data.date}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>
        <Button title="-" onPress={() => handleRemove(data.id)}></Button>

        {showValue ? (
          <Text
            style={data.type === 1 ? styles.value : styles.expenses}
          >
            {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
          </Text>
        ) : (
          <EyeOff color="#DADADA" width={22} height={22} />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DADADA'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5
  },
  date: {
    color: '#DADADA',
    fontWeight: 'bold'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16
  },
  value: {
    fontSize: 16,
    color: '#2ecc71',
    fontWeight: 'bold'
  },
  expenses: {
    fontSize: 16,
    color: '#e74c3c',
    fontWeight: 'bold'
  }

})