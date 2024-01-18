import { MEALS, CATEGORIES } from '../data/dummy-data';
import React, { useEffect, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useRoute, useNavigation } from '@react-navigation/native';
import type Meal from '../models/meal';
import type Category from '../models/category';
import MealItem from '../components/MealItem';

type RootStackParamList = {
    MealsOverview: undefined;
    Categories: undefined;
    // Add other screen names and their respective params here
};

type CategoriesScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList>;
};

// you can use a hook or give a route prop to the commponent

// export default function MealsOverviewScreen({ navigation, route: { params } }: { navigation: NativeStackNavigationProp<RootStackParamList>, route: { params: { categoryId: string } } }) {
// export default function MealsOverviewScreen({ route }: { route: { params: { categoryId: string } } }) {
// export default function MealsOverviewScreen({ route }: any) {
// export default function MealsOverviewScreen({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList> }) {
export default function MealsOverviewScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const catID: string = (route.params as { categoryId: string }).categoryId;
    const catColor: string = (route.params as { color: string }).color;

    // the useLayoutEffect hook is used to run BEFORE a component is rendered
    // the UseEffect hook is used to run AFTER a component is rendered
    useLayoutEffect(() => {
        const categoryFound: Category | undefined = CATEGORIES.find(category => category.id === catID);
        const categoryTitle: string = categoryFound ? categoryFound.title : 'Did not find a category';
        navigation.setOptions({ title: categoryTitle });
    }, [catID, navigation]);

    // const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter(mealItem => { return mealItem.categoryIds.indexOf(catID) >= 0 })

    function renderMealItem(itemData: { item: Meal }) {
        return (
            <MealItem item={itemData.item} catColor={catColor} />
        )
    }


    return (
        <View style={style.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item: Meal) => item.id}
                renderItem={renderMealItem}

            />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})