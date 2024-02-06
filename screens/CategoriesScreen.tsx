import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import type Category from './models/category';
// you can use import type to import the type of a variable, function, or class without importing the variable, function, or class itself.

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// uitzoeken met deze types
type RootStackParamList = {
    MealsOverview: undefined;
    // params: { categoryId: string };
    // Add other screen names and their respective params here
};

type CategoriesScreenProps = {
    // i think the second one are teh params of the function
    navigation: NativeStackNavigationProp<RootStackParamList>;
};

const CategoriesScreen = ({ navigation }: CategoriesScreenProps) => {
    // type myType =
    //     {
    //         categoryId: string;
    //     };
    // const ReturnCategoryItem = ({item}: {item: {id: string, title: string, color: string}}) => {
    const RenderCategoryItem = ({ item }: { item: Category }) => {
        // console.log(item);
        function pressHandler() {
            navigation.navigate("MealsOverview", { categoryId: item.id, color: item.color } as any);


            // { route: { params } }: { route: { params: { categoryId: string } } }
        }
        return (
            <CategoryGridTile id={item.id} title={item.title} color={item.color} onPress={pressHandler} />
            // <CategoryGridTile item={item}/>
        )
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({ item }) => (
                <RenderCategoryItem item={item} />
            )}

        />
    )

};

export default CategoriesScreen;
