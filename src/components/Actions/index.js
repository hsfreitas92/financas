import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";

import { FolderPlus, Tag, FolderMinus, Settings } from "react-native-feather";

export default function Actions() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <FolderPlus color="#000" width={26} height={26} />
          </View>
          <Text style={styles.labelButton}>Entradas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <FolderMinus color="#000" width={26} height={26} />
          </View>
          <Text style={styles.labelButton}>Saídas</Text>
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
        />
      </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    //maxHeight: 84,
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
    height: 38,
    width: 95,
    padding: 10,
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'center'
  },
  textoNome: {
    fontSize: 17,
    color: '#000000',
    fontWeight: 'bold',
  },
  areaFormulario: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
})