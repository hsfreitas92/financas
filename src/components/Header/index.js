import React from "react";
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from "react-native";

import { User } from "react-native-feather";

const statusBarHeight = StatusBar.currentHeight;

export default function Header({ name }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.username}>{name}</Text>
        
        <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
          <User color="#FFF" width={27} height={27} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8000ff',
    // paddingTop: statusBarHeight,
    paddingTop: 16,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44
  },
  content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  username: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
  },
  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255,255,255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 44 / 2
  }
})