import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* Via the initialRouteName="User" param we can set the screen that should be shown initially instead of it using the order from top to bottom as we define it eg below */}
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#3c0a6b' },
          headerTintColor: 'white',
          drawerActiveBackgroundColor: '#f0e1ff',
          drawerActiveTintColor: '#3c0a6b'
          // drawerStyle: { backgroundColor: '#ccc' }
        }}
      >
        <Drawer.Screen
          name='Welcome'
          component={WelcomeScreen}
          options={{
            drawerLabel: 'Welcome Screen',
            drawerIcon: ({ color, size }) => (
              <Ionicons name='home' color={color} size={size} />
            )
          }}
        />
        <Drawer.Screen
          name='User'
          component={UserScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name='person' size={size} />
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
