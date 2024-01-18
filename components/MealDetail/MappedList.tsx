import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { listItemStyle } from '../../constants/styleObjects';

export default function MappedList({ data }: { data: string[] }) {


    return (
        data.map((item: string, index: number) => {
            return (
                <View style={listItemStyle} key={index} >
                    <Text >{`\u2022 ${item}`}</Text>
                </View >
            )
        }))


}

// const styles = StyleSheet.create({
//     listItem: {
//         // listItemStyle
//     },

// });