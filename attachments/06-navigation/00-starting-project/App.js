import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            // If we want to have the same (default) style we can use the screenOptions to set them for every screen
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}
        >
          <Stack.Screen
            name='MealsCategories'
            component={CategoriesScreen}
            options={{
              title: 'All Categories'
              // We can set the options individually for every screen if we want something different
              // headerStyle: { backgroundColor: '#351401' },
              // headerTintColor: 'white',
              // contentStyle: { backgroundColor: '#3f2f25' }
            }}
          />
          <Stack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
            // for dynamic options we can use a arrow function which automatically receives the route and navigation params
            // options={({ route, navigation }) => {
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId
            //   };
            // }}
          />
          <Stack.Screen
            name='MealDetail'
            component={MealDetailScreen}
            // Example of adding a button to the header, in this case right. This is only good if we don't need direct interaction with the component that is responsible for rendering the screen content!
            // If we need direct communication we need to go to the screen component (in this case MealDetailsScreen) and set the options as we learned there
            
            // options={{headerRight: () => {
            //   return <Button title='Tap me'/>
            // }}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
