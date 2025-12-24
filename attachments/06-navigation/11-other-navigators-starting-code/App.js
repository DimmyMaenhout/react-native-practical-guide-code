// import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// const Drawer = createDrawerNavigator();

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    // NAVIGATION USING DRAWER
    // <NavigationContainer>
    //   {/* Via the initialRouteName="User" param we can set the screen that should be shown initially instead of it using the order from top to bottom as we define it eg below */}
    //   <Drawer.Navigator
    //     screenOptions={{
    //       headerStyle: { backgroundColor: '#3c0a6b' },
    //       headerTintColor: 'white',
    //       drawerActiveBackgroundColor: '#f0e1ff',
    //       drawerActiveTintColor: '#3c0a6b'
    //       // drawerStyle: { backgroundColor: '#ccc' }
    //     }}
    //   >
    //     <Drawer.Screen
    //       name='Welcome'
    //       component={WelcomeScreen}
    //       options={{
    //         drawerLabel: 'Welcome Screen',
    //         drawerIcon: ({ color, size }) => (
    //           <Ionicons name='home' color={color} size={size} />
    //         )
    //       }}
    //     />
    //     <Drawer.Screen
    //       name='User'
    //       component={UserScreen}
    //       options={{
    //         drawerIcon: ({ color, size }) => (
    //           <Ionicons name='person' size={size} />
    //         )
    //       }}
    //     />
    //   </Drawer.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#3c0a6b' },
          headerTintColor: 'white',
          tabBarActiveTintColor: '#3c0a6b'
        }}
      >
        <BottomTab.Screen
          name='Welcome'
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='home' color={color} size={size} />
            )
          }}
        />
        <BottomTab.Screen
          name='User'
          component={UserScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='person' color={color} size={size} />
            )
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
