import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import styles from '../styles'; // shared styles

export default function Homepage({ navigation }) {
  return (
    <View style={[styles.container, localStyles.container]}>
      <Text style={[styles.title, localStyles.title]}>Welcome to my App</Text>
      <Text style={localStyles.subtitle}>Register to continue</Text>
      <View style={[styles.buttonContainer, localStyles.buttonContainer]}>
        <Button
          title="Register"
          color="#2563EB"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F6FA',
    width: '100%',
  },
  title: {
    color: '#1E293B',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#475569',
    marginBottom: 12,
    textAlign: 'center'
  },
  buttonContainer: {
    width: '60%',
  }
});