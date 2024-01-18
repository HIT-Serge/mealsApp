import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { MEALS } from '../data/dummy-data';
import type Meal from '../models/meal';
import { Platform } from 'react-native';
import { iOSShadow } from '../constants/styleObjects';

import MealDetails from '../components/MealDetail/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';

import MappedList from '../components/MealDetail/MappedList';
import IconButton from '../components/IconButton';


export default function MealDetailsScreen() {


    const route = useRoute();
    const navigation = useNavigation();

    const onPressHandler = () => {
        console.log('pressed');
    }

    useLayoutEffect(() => {
        navigation.setOptions({

            headerRight: () => {
                return <IconButton icon={'star'} onPressHandler={onPressHandler} color='black' size={24} />

                // return <Button title='Tap me' onPress={onPressHandler}></Button>
            }
        })
    }, [navigation, onPressHandler])

    const mealID: string = (route.params as { mealID: string }).mealID;
    const bgColor: string = (route.params as { bgColor: string }).bgColor;
    const selectedMeal: Meal | undefined = MEALS.find(item => item.id === mealID);
    // console.log(selectedMeal);

    if (selectedMeal) return (
        // <View style={[styles.outerContainer, { backgroundColor: bgColor }]}>
        <ScrollView style={styles.scrollViewContainer}>
            <View style={[styles.outerContainer]}>
                <View style={styles.imageContainer} >

                    <Text style={[styles.title, { textAlign: 'center' }]}>{selectedMeal.title}</Text>
                    <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />

                </View>
                <View >
                    <MealDetails item={selectedMeal} textColor='white' />
                </View>

                <View style={styles.listContainer} >

                    <View style={styles.mappedListContainer} >
                        <Subtitle>Ingredients</Subtitle>
                        <MappedList data={selectedMeal.ingredients} />
                    </View >
                    <View style={styles.mappedListContainer} >
                        <Subtitle>Steps</Subtitle>
                        <MappedList data={selectedMeal.steps} />

                    </View >
                </View>

            </View >
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    scrollViewContainer: {
        flex: 1,
        marginBottom: 16,

    },

    outerContainer: {
        flex: 1,
        // padding: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        margin: 16,
        elevation: 14,

    },
    imageContainer: {
        // flex: 1,
        // borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: Platform.OS === 'android' ? '' : 'white',
        shadowColor: iOSShadow.shadowColor,
        shadowOpacity: iOSShadow.shadowOpacity,
        shadowOffset: iOSShadow.shadowOffset,
        shadowRadius: iOSShadow.shadowRadius,
        alignItems: 'center',

    },
    image: {
        width: '80%',
        height: 300,
        // maxHeight: '100%',

    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'left',
        margin: 8,
        color: 'white',
        marginBottom: 8,
    },
    MealDetailsContainer: {
        // flex: 1,
        borderBottomColor: 'white',
        borderBottomWidth: 1,

    },
    ingredients: {
        textAlign: 'left',
        flexDirection: 'column',
        paddingHorizontal: 8,
        justifyContent: 'center',
        color: 'white',
        padding: 2,
    },
    stepsContainer: {
        // flex: 1,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },

    text: {
        marginHorizontal: 8,
        fontSize: 11,
        color: 'white',

    },
    listContainer: {
        flex: 1,
        // width: '80%',
        // alignItems: 'center',


    },
    mappedListContainer: {
        // width: '80%',
        // flex: 1,
        alignItems: 'center'

    },
    numericListContainer: {
        alignItems: 'center',
        // justifyContent: 'center',
        flex: 1,
    },
    pressed: {
        opacity: 0.75,
    },

})