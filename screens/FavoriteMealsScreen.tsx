import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { FavoritesContext } from '../store/context/favorites-context';
import MealItem from '../components/MealItem';
import Meal from '../models/meal';
import { MEALS } from '../data/dummy-data';
import { useRoute, useNavigation } from '@react-navigation/native';

const FavoriteMealsScreen: React.FC = () => {
    const route = useRoute();
    const { ids } = useContext(FavoritesContext);
    // const catColor: string = (route.params as { color: string }).color;
    console.log(ids);
    const displayedMeals = MEALS.filter(mealItem => ids.includes(mealItem.id));
    console.log(displayedMeals);

    // const displayedMeals = MEALS.filter(mealItem => mealItem.categoryIds.has(ids) );

    function renderMealItem(itemData: { item: Meal }) {
        return (
            <MealItem item={itemData.item} catColor={'#fff'} />
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
};

export default FavoriteMealsScreen;


const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})
