import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import axios from 'axios';

export default function Reviewpage({route, navigation}) {
    const {formData} = route.params;

    const handleSubmit = async () => {
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/registration/api/register/',
                formData
            );
            console.log(response.data);
        } catch (error) {
            console.error(error.response?.data || error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Review Information</Text>
            <View style={styles.block}>
              <Text style={styles.label}>First Name:</Text>
              <Text style={styles.value}>{formData.first_name}</Text>
            </View>
            <View style={styles.block}>
              <Text style={styles.label}>Last Name:</Text>
              <Text style={styles.value}>{formData.last_name}</Text>
            </View>
            <View style={styles.block}>
              <Text style={styles.label}>Email:</Text>
              <Text style={styles.value}>{formData.email}</Text>
            </View>
            <View style={styles.block}>
              <Text style={styles.label}>Gender:</Text>
              <Text style={styles.value}>{formData.gender}</Text>
            </View>
            <View style={styles.block}>
              <Text style={styles.label}>Password:</Text>
              <Text style={styles.value}>{formData.password}</Text>
            </View>
            <View style={styles.buttons}>
              <Button title="Go back to Edit" onPress={() => navigation.goBack()} />
            </View>
            <View style={styles.buttons}>
              <Button title="Submit" onPress={handleSubmit} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // light background
    padding: 20
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    marginBottom: 16
  },
  block: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E3E3E3'
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4
  },
  value: {
    fontSize: 16,
    color: '#222',
    fontWeight: '500'
  },
  buttons: {
    marginTop: 6
  }
});