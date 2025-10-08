import React from "react";
import { View, Text, Button } from "react-native";
import styles from '../styles'; // if using shared styles

export default function Homepage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to my App</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </View>
  );
}