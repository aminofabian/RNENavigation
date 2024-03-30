import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

export default function HomeScreen({ navigation, route }) {
  const { name } = route.params;
  return (
    <View>
      <Text>HomeScreen {name}</Text>

      <Button style={styles.button} title='Go to Profile' onPress={() => {
        navigation.navigate('Profile', {
          name: 'Fabian',
        })
      }} />

      <Button style={styles.button} title='Go to Settings' onPress={() => {
        navigation.navigate('Settings')
      }} />

      <TouchableOpacity title='update name' style={styles.button} onPress={() => {
        navigation.setParams(
          {
            name: 'Zelisline'
          }
        )
      }} >
        <Text style={styles.buttonText}>Update Name</Text>
      </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
  button: {
    marginVertical: 5,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: 'blue',
    alignSelf: 'center',
    width: 100,

  },
  buttonText: {
    color: 'white',
    textAlign: 'center',

  }
})