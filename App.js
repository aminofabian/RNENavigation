import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Notifications from './screens/Notifications';
import SettingsScreen from './screens/SettingsScreen';
import Profile from './screens/ProfileScreen';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator id={1} initialRouteName="Settings" screenOptions={{
        title: 'Notifications',
        contentStyle: {
          backgroundColor: 'skyblue',
        },
        headerStyle: {
          backgroundColor: 'skyblue',
        }
      }}
 >
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: 'Welcome Home',
          headerStyle: {
            backgroundColor: 'red',
            borderBottomColor: 'white',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Button title='Update Name' onPress={() => alert('Name Updated')} />
          )

        }} />
        <Stack.Screen name="Notifications" component={Notifications} 
          options={{
            title: 'Notifications',
            contentStyle: {
              backgroundColor: 'skyblue',
            },
            headerStyle: {
              backgroundColor: 'skyblue',
            }
          }}
        
        />
        <Stack.Screen name="Profile" component={Profile} headerShown='false' initialParams={{ name: 'Guest' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}