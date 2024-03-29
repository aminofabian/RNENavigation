import { View, Text, Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Notifications({ route }) {
  const { name } = route.params;
  const navigation = useNavigation();
  return (
    <View>
      <Text>Notifications {name}</Text>

      <Button title='Go to Profile' onPress={() => {
        navigation.navigate('Profile')
      }} />

    </View>
  )
}