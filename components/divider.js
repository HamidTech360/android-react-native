import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Divider =() =>{
    return (
        <View style = {styles.divider}/>     
        
    )
}

const styles = StyleSheet.create({
    divider:{
        height:1,
        width:'100%',
        backgroundColor:'lightgrey'
    }
})
export default Divider