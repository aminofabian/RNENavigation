import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Notifications from './screens/Notifications';
import SettingsScreen from './screens/SettingsScreen';
import Profile from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator id={1} initialRouteName="Settings" >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Profile" component={Profile} headerShown='false' initialParams={{ name: 'Guest' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}