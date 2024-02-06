import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, Platform } from 'react-native';
import type Meal from '../screens/models/meal';
import { iOSShadow } from '../constants/styleObjects';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MealDetails from './MealDetail/MealDetails';


export default function MealItem(props: { item: Meal, catColor: string }) {

    let image = props.item.imageUrl;

    const { id } = props.item;

    const navigation: NativeStackNavigationProp<RootStackParamList> = useNavigation();

    type MealDetailsScreenRouteParams = {
        mealID: string;
        bgColor: string;
    };

    type RootStackParamList = {
        MealDetails: undefined;
        // params: { categoryId: string };
        // Add other screen names and their respective params here
    };

    type CategoriesScreenProps = {
        // i think the second one are teh params of the function
        navigation: NativeStackNavigationProp<RootStackParamList>;
    };

    function pressHandler() {
        navigation.navigate("MealDetails", {
            mealID: id,
            bgColor: props.catColor
        } as any);

    }



    return (
        <View style={[styles.outerContainer, { backgroundColor: props.catColor }]}>
            <Pressable android_ripple={{ color: '#bbb', foreground: true }}
                style={({ pressed }) => styles.pressed}
                onPress={pressHandler}>
                <View style={styles.innerContainer}>
                    <View >
                        <Image style={styles.image} source={{ uri: image }} />
                        <Text style={styles.title}>{props.item.title}</Text>
                    </View>
                    <MealDetails item={props.item} textColor={'black'} />
                </View>
            </Pressable>
        </View >
    )
}

const styles = StyleSheet.create({

    outerContainer: {
        flex: 1,
        // padding: 16,
        borderRadius: 8,
        // overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        margin: 16,
        elevation: 14,



    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: Platform.OS === 'android' ? '' : 'white',
        shadowColor: iOSShadow.shadowColor,
        shadowOpacity: iOSShadow.shadowOpacity,
        shadowOffset: iOSShadow.shadowOffset,
        shadowRadius: iOSShadow.shadowRadius,

    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        margin: 8,
    },
    details: {
        textAlign: 'left',
        flexDirection: 'row',
        padding: 8,
        justifyContent: 'center'
    },
    text: {
        marginHorizontal: 8,
        fontSize: 11,

    },
    pressed: {
        opacity: 0.75,
    },

})