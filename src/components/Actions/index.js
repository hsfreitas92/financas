import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Button } from "react-native";

import { FolderPlus, FolderMinus, Settings } from "react-native-feather";
import uuid from 'react-native-uuid';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

export default function Actions() {
  const [label, setLabel] = useState('Boleto');
  const [value, setValue] = useState('');
  const [date, setDate] = useState('17/09/2022');
  const [type, setType] = useState(0);

  const { getItem, setItem, removeItem } = useAsyncStorage("@financas:moviments")

  async function handleNew() {
    try {
      const id = uuid.v4()
      const newData = {
        id,
        label,
        value,
        date,
        type,
      }

      const response = await getItem();
      const previousData = response ? JSON.parse(response) : [];

      const data = [...previousData, newData]

      await setItem(JSON.stringify(data));
      Toast.show({
        type: "success",
        text1: "Cadastrado com sucesso!"
      })
    } catch (error) {
      console.log(error);
      Toast.show({
        type: "error",
        text1: "Não foi possível cadastrar."
      })
    }
  }

  async function handleRemove() {
    try {
      await removeItem();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <FolderPlus color="#000" width={26} height={26} />
          </View>
          <Text style={styles.labelButton}>Entradas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={handleRemove}>
          <View style={styles.areaButton}>
            <FolderMinus color="#000" width={26} height={26} />
          </View>
          <Text style={styles.labelButton}>Remove</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <Settings color="#000" width={26} height={26} />
          </View>
          <Text style={styles.labelButton}>Conta</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.areaFormulario}>
        <Text style={styles.textoNome}>Entrada/Saida:</Text>
        <TextInput style={styles.input}
          placeholder="Valor"
          maxLength={9}
          onChangeText={setValue}
        />
        <Button title="Salvar" onPress={handleNew}>

        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
    marginTop: 18,
    paddingEnd: 14,
    paddingStart: 14,
  },
  content: {
    flexDirection: 'row'
  },
  actionButton: {
    alignItems: 'center',
    marginRight: 32,
  },
  areaButton: {
    backgroundColor: '#ecf0f1',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  labelButton: {
    marginTop: 4,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  input: {
    borderBottomWidth: 1,
    borderRadius: 4,
    borderColor: '#999999',
    backgroundColor: '#EEEEEE',
    color: '#000000',
    height: 30,
    width: 95,
    padding: 5,
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'center'
  },
  textoNome: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  areaFormulario: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
})