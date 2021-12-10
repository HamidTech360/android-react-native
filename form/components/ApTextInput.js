import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

const  ApTextInput= ({icon, placeholder, onChangeText}, {...otherProps})=> {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name={icon} size={25} color="rgb(99, 89, 89)" style={styles.icon} />
            <TextInput placeholder={placeholder} onChangeText={onChangeText} {...otherProps} />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:'lightgrey',
        padding:15,
        borderRadius:20,
        marginBottom:10
    },
    icon:{
        marginRight:10
    }
})

export default ApTextInput