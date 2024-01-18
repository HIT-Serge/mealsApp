import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { listItemStyle } from '../../constants/styleObjects';
export default function NumericList({ data }: { data: string[] }) {
    return (
        <View style={styles.mainContainer}>
            <FlatList
                // style={{ alignSelf: 'center' }}
                showsVerticalScrollIndicator={false}
                data={data}
                contentContainerStyle={{
                    // padding: 10, paddingHorizontal: 8,
                    // paddingVertical: 2,
                    // alignItems: 'center',
                }}
                keyExtractor={(item: string, index: number) => { return item + index }}
                renderItem={itemData => {
                    return (
                        <View style={styles.listItem}>
                            <Text key={itemData.index} >{`${itemData.index + 1}. ${itemData.item}`}</Text>
                        </View>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        // justifyContent: 'center',
        // alignItems: 'center',
        flex: 1,
    },
    listItem: {
        alignSelf: 'center',
        flexDirection: 'column',
        paddingHorizontal: 8,
        paddingVertical: 2,
        marginVertical: 4,
        // padding: 10,
        width: '90%',
        backgroundColor: '#ebae7c',
        borderRadius: 8,
        alignItems: 'flex-start',
    },
});