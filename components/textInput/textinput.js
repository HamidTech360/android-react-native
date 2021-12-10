import React from 'react'
import { StyleSheet, Text, View, TextInput, Platform } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
 const InputBox = ({onChange, icon, placeholder})=> {
    return (
        <View  style ={styles.container  }>
        
            {icon && <MaterialCommunityIcons name ={icon} size={25} color="rgb(99, 89, 89)" style={{marginRight: 10}}/>}
            <TextInput
                maxLength ={20}
                secureTextEntry 
                onChangeText={onChange}
                placeholder={placeholder}
                 style={styles.TextInput}
            />  
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'lightgrey',
        borderRadius:25,
        flexDirection:'row',
        width:'100%',
        padding:15,
        marginVertical:10
    },
    TextInput:{
        fontSize:15,
        fontFamily: Platform.OS=="android"?'Roboto':'Avenir',
        color:'grey'
    }
})
export default InputBox