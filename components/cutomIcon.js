import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
 const CustomIcon=({size, name, color})=> {
    return (
        <View
            style ={{
                width:size,
                height:size,
                borderRadius: size/2,
                backgroundColor:'red',
                justifyContent:'center',
                alignItems:'center',
               
            }}
        >
            <MaterialCommunityIcons name ={name} color={color} size={0.5*size}  />
        </View>
    )
}

const styles = StyleSheet.create({})
export default CustomIcon