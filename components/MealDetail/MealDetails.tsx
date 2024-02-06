import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, Platform } from 'react-native';
import type Meal from '../../screens/models/meal';


export default function MealDetails(props: { item: Meal, textColor: string }) {
    return (
        <View style={styles.details}>
            <Text style={[styles.text, { color: props.textColor }]}>{props.item.duration} min</Text>
            <Text style={[styles.text, { color: props.textColor }]}> {props.item.complexity.toUpperCase()}</Text>
            <Text style={[styles.text, { color: props.textColor }]}>{props.item.affordability.toUpperCase()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        marginHorizontal: 8,
        fontSize: 12,

        color: 'white',

    },
    details: {
        // flex: 1,
        // textAlign: 'left',
        flexDirection: 'row',
        padding: 8,
        justifyContent: 'center'
    },
})