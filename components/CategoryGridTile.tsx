import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Platform } from 'react-native';
import type Category from '../models/category';
import ColorChange from './ColorChange';
// import { useNavigation } from '@react-navigation/native';

export default function CategoryGridTile(props: {id: string,title: string, color: string, onPress: () => void}) {
// export default function CategoryGridTile(props: {item: {id: string,title: string, color: string,}}) {
// export default function CategoryGridTile({item}: {item: {id: string,title: string, color: string,}}) {
// export default function CategoryGridTile({ item: { id, title, color } }: { item: { id: string, title: string, color: string } }) {
// export default function CategoryGridTile({ item }: { item: Category }) {
    // export default function CategoryGridTile({ item: { id, title, color, onPress } }: { item: Category }) {


    // const navigation = useNavigation();
        const pressedColor: string = ColorChange(props.color, '020202');
   

    return (
        
        <View style={[styles.outerContainer, ]}>
            <Pressable style={({ pressed }) => pressed ? [styles.pressableContainer, styles.pressed] : styles.pressableContainer} android_ripple={{color: '#ccc'}} 
            onPress={props.onPress}
            >
                <View style={[styles.innerContainer, {backgroundColor: props.color}]}>
                     <Text style={styles.text}>{props.title}</Text>
                 </View>
        </Pressable>
        </View>
    );
    }
    const styles = StyleSheet.create({
        outerContainer: {
            // flatlist still restricts flex 1 but it will make use all space available for an item
            flex: 1,
            margin: 16,
            height: 150,
            borderRadius: 8,
            // android
            elevation: 14,
            // ios (without backGroundColor the shadow will not work)
            backgroundColor: 'white',
            shadowColor: 'black',
            shadowOpacity: 0.25,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 8,
            // you want to know the platform to know if the overflow should be hidden
            overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        },
        innerContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 16,
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
            fontSize: 18,

        }
    });
    // <View style={{backgroundColor: props.item.color}}>
    // <Text>{props.item.title}</Text>
    // </View>