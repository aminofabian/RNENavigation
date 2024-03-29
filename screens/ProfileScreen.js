import { View, Text, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Profile({ route }) {
  const { name } = route.params;
  const navigation = useNavigation();

  return (
    <View>
      <Text>Profile {name}</Text>

      <TouchableOpacity onPress={() => {
        navigation.navigate("Home", {
          name: 'Fabian'
        })
      }}>
        <Text>Go to Home</Text>
      </TouchableOpacity>

    </View>
  )
}