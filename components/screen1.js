import React from 'react';
import { View,Text, StyleSheet, SafeAreaView, Platform } from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'

const Screen = () => {
    return ( 
        <SafeAreaView style = {style.container}>
            {/* <View style = {style.inner1}>

            </View> */}
            <MaterialCommunityIcons name="mail" size={150} color="dodgerblue"/>
            <Text style={style.text}> Welcome to my first android app</Text>
        </SafeAreaView>
     );
}

const style = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        paddingTop: Platform.OS==="android"?40:0,
     
    },
    inner1:{
        backgroundColor:'dodgerblue',
        height:100,
        width:100
    },
    text:{
        color:'brown',
        ...Platform.select({
            ios:{
                fontFamily:'Avenir'
            },
            android:{
                fontFamily:'Roboto'
            }
        })
    }
})
 
export default Screen;