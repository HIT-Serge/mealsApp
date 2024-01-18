import React from "react";
import { StyleSheet, Platform } from "react-native";

const iOSShadow = {
    // android
    // ios (without backGroundColor the shadow will not work)
    backgroundColor: 'yellow',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,


};

const stackScreenStyle = {
    // title: 'Meal Categories',
    headerStyle: {
        backgroundColor: '#351401',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    contentStyle: { backgroundColor: '#3f2f25' }
};

const listItemStyle = {
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginVertical: 4,
    width: '80%' as '80%',
    justifyContent: 'center' as 'center', // Make sure this is one of the allowed values
    padding: 10,
    backgroundColor: '#ebae7c',
    borderRadius: 8,

};

export { iOSShadow, stackScreenStyle, listItemStyle };