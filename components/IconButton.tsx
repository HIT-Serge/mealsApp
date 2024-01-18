import React from "react";
import { View, Text, StyleSheet, Pressable, Platform, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
// import type { Icon } from '@expo/vector-icons';
// this import works but gives an error on the import beceaus it says Icon does not exist on type '@expo/vector-icons'

// keyof typeof Ionicons.glyphMap, color



export default function IconButton(props: { onPressHandler: () => void, icon: keyof typeof Ionicons.glyphMap, size: number, color: string }) {
    return (
        <View style={styles.outerContainer}>
            <Pressable
                style={({ pressed }) => pressed ? [styles.pressableContainer, styles.pressed] : styles.pressableContainer}
                android_ripple={{ color: 'transparant' }}
                onPress={props.onPressHandler}
            >
                <View style={styles.innerContainer}>
                    {/* <Text style={styles.text}>Tap Me!</Text> */}
                    <Ionicons name={props.icon} size={props.size} color={props.color} />
                </View>
            </Pressable>
        </View>
    )

}

const styles = StyleSheet.create({
    outerContainer: {
        height: 35,
        borderRadius: 8,
        elevation: 14,
        backgroundColor: '#ebae7c',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerContainer: {
        paddingHorizontal: 16,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // padding: 16,
        borderRadius: 8,
    },
    pressableContainer: {
        flex: 1,
        // if pressable does not get a flex 1 than it will not take up any space and your text-item will not be visible
    },
    pressed: {
        opacity: 0.75,
    },

    text: {
        fontWeight: 'bold',
        fontSize: 14,

    }
})