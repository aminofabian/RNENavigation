import { View, Text, Button, StyleSheet } from 'react-native';
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

    </View>
  )
}


const styles = StyleSheet.create({
  button: {
    margin: 20,
    backgroundColor: 'blue',
    color: 'white',
    alignSelf: 'center',
    width: 100,

  }
})