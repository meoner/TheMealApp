import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CategoryPage, FilterCategoryPage, MealDetailsPage} from './pages';

const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Category" component={CategoryPage} />
        <Stack.Screen name="FilterCategory" component={FilterCategoryPage} />
        <Stack.Screen name="Meal" component={MealDetailsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
