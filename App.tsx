import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <>
      <StatusBar style="light" />
      {/* defaultScreen follows first child in navigationContainer but you can set the default also with initialRouteName  */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Categories'>
          <Stack.Screen name="Categories" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
      </Stack.Navigator>
      </NavigationContainer>

      </>
 

  );
}

const styles = StyleSheet.create({
  container: {

  },
});
