import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function SettingsScreen({ route }) {

  const navigation = useNavigation();
  return (
    <View>
      <Text>Settings Screen</Text>

      <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("Profile", {
          name: 'Settings Fabian',
        })
      }}>
        <Text style={styles.buttonText}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: 'blue',
    alignSelf: 'center',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
  },
});
