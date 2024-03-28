import { View, Text, Button } from 'react-native';
import React from 'react';

export default function Profile({ route }) {
  const { name } = route.params;

  return (
    <View>
      <Text>Profile {name}</Text>

    </View>
  )
}