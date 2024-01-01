import {MEALS} from '../data/dummy-data';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MealsOverviewScreen() {
    return (
        <View style={style.container}>
            <Text>MealsOverviewScreen</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
})