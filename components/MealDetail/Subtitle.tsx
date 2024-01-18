import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Subtitle({ children }: { children: React.ReactNode }) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.title}>{children}</Text>
        </View >
    )
}

const styles = StyleSheet.create({
    subtitleContainer: {
        // flex: 1,
        borderBottomColor: '#ebae7c',
        borderBottomWidth: 2,
        marginBottom: 4,
        width: '80%'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        margin: 8,
        color: 'white',
        marginBottom: 4,
    },
})
