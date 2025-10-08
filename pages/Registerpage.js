import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, ScrollView } from "react-native";

export default function Registerpage({ navigation }) {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    password: "",
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Registration Page</Text>

      <View style={styles.block}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter first name"
          value={formData.first_name}
          onChangeText={(text) => handleChange("first_name", text)}
        />
      </View>

      <View style={styles.block}>
        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter last name"
          value={formData.last_name}
          onChangeText={(text) => handleChange("last_name", text)}
        />
      </View>

      <View style={styles.block}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          keyboardType="email-address"
          value={formData.email}
          onChangeText={(text) => handleChange("email", text)}
        />
      </View>

      <View style={styles.block}>
        <Text style={styles.label}>Gender</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter gender"
          value={formData.gender}
          onChangeText={(text) => handleChange("gender", text)}
        />
      </View>

      <View style={styles.block}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry
          value={formData.password}
          onChangeText={(text) => handleChange("password", text)}
        />
      </View>

      <View style={styles.buttonWrap}>
        <Button
          title="Review and Submit"
          onPress={() => navigation.navigate("Review", { formData })}
          color="#2563EB"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    marginBottom: 18,
  },
  block: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E3E3E3'
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginBottom: 6
  },
  input: {
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 14,
    color: '#222'
  },
  buttonWrap: {
    marginTop: 10
  }
});