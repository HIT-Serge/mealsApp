import { StatusBar } from 'expo-status-bar';
import React, { createContext, useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import { stackScreenStyle } from './constants/styleObjects';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteMealsScreen from './screens/FavoriteMealsScreen';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './store/context/favorites-context';


// miss wel belangrijkste onderdeel
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Favorites"
      screenOptions={
        {
          headerStyle: { backgroundColor: stackScreenStyle.headerStyle.backgroundColor },
          headerTintColor: stackScreenStyle.headerTintColor,
          headerTitleStyle: { fontWeight: stackScreenStyle.headerTitleStyle.fontWeight as any },
          sceneContainerStyle: stackScreenStyle.contentStyle,
          // drawerLabel: 'Home Screen',
          drawerActiveBackgroundColor: '#ebae7c',
          drawerActiveTintColor: '#000',
          drawerContentStyle: { backgroundColor: stackScreenStyle.contentStyle.backgroundColor },
          drawerInactiveBackgroundColor: 'transparent',
          drawerInactiveTintColor: '#ebae7c',

        }}>
      <Drawer.Screen name="Eat Categories" component={CategoriesScreen}
        options={{
          // // in this way you can set the same TITLE as in the higher lever of the stack navigator. You cannot NAMEE a screen the same otherwise the navigators will conflict 
          title: 'Categories',
          drawerIcon: ({ color, size }) => <Ionicons name='list' size={size} color={color} />

        }
        } />
      <Drawer.Screen name="Favorites" component={FavoriteMealsScreen}
        options={{
          drawerIcon: ({ color, size }) => <Ionicons name='star-sharp' size={size} color={color} />
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {

  return (
    <>
      <StatusBar style="light" />
      {/* defaultScreen follows first child in navigationContainer but you can set the default also with initialRouteName  */}
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Categories'
            screenOptions={
              {
                headerStyle: { backgroundColor: stackScreenStyle.headerStyle.backgroundColor },
                headerTintColor: stackScreenStyle.headerTintColor,
                // headerTitleStyle: { fontWeight: stackScreenStyle.headerTitleStyle.fontWeight as any }, 
                contentStyle: stackScreenStyle.contentStyle
              }
            }>
            <Stack.Screen
              name="Categories"
              // component={CategoriesScreen}
              component={DrawerNavigator}
              options={{
                headerShown: false,
                // ...stackScreenStyle,
                // title: 'Meal Categories',
                // headerTintColor: stackScreenStyle.headerTintColor,
                // headerTitleStyle: { fontWeight: stackScreenStyle.headerTitleStyle.fontWeight as any },
                // headerStyle: { backgroundColor: stackScreenStyle.headerStyle.backgroundColor }, 
              }}

            />
            <Stack.Screen name="MealsOverview"
              component={MealsOverviewScreen}


              options={({ route, navigation }) => {
                const catID: string = (route.params as { categoryId: string }).categoryId;
                return {
                  title: catID,
                  headerTintColor: stackScreenStyle.headerTintColor,
                  headerStyle: { backgroundColor: stackScreenStyle.headerStyle.backgroundColor }, headerTitleStyle: { fontWeight: stackScreenStyle.headerTitleStyle.fontWeight as any }
                }
              }}
            />
            <Stack.Screen name="MealDetails" component={MealDetailsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>

    </>


  );
}

// options={{
//   title: 'Meal Categories',
//   headerStyle: {
//     backgroundColor: '351401',
//   },
//   headerTintColor: 'white',
//   headerTitleStyle: {
//     fontWeight: 'bold',
//   },
//   contentStyle: { backgroundColor: '3f2f25' }
// }}

// options={{
// ...stackScreenStyle,
// title: 'Meals',
// headerTintColor: stackScreenStyle.headerTintColor,
// headerStyle: { backgroundColor: stackScreenStyle.headerStyle.backgroundColor }, headerTitleStyle: { fontWeight: stackScreenStyle.headerTitleStyle.fontWeight as any }
// }}

const styles = StyleSheet.create({
  container: {

  },
});
