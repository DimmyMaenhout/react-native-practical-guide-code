import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

import AllExpenses from './screens/AllExpenses';
import RecentExpenses from './screens/RecentExpenses';
import ManageExpenses from './screens/ManageExpense';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function StackNavigator() {
  <Stack.Navigator>
    <Stack.Screen
      name='recentExpenses'
      component={RecentExpenses}
      options={{
        headerRight: () => {
          <Ionicons name='add' color='white' size={24} />;
        }
      }}
    />
  </Stack.Navigator>;
}

function ExpensesOverview() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#EBBD1E',
        tabBarStyle: {
          backgroundColor: '#1434A4'
        },
        headerRight: () => {
          <Ionicons name='add' color='white' size={24} />;
        }
      }}
    >
      <BottomTab.Screen
        name='RecentExpenses'
        component={RecentExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='hourglass-outline' color={color} size={size} />
          ),
          title: 'Recent Expenses'
        }}
      />
      <BottomTab.Screen
        name='AllExpenses'
        component={AllExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='calendar' color={color} size={24} />
          ),
          title: 'All Expenses'
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            // name='recentExpenses'
            // component={RecentExpenses}
            // options={{
            //   headerTintColor: 'white',
            //   headerStyle: {
            //     backgroundColor: '#1434A4'
            //   },
            //   headerRight: () => {
            //     <Ionicons name='add' color='white' size={24} />;
            //   }
            // }}
            name='ExpensesOverview'
            component={ExpensesOverview}
          />
          <Stack.Screen name='MangeExpenses' component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
