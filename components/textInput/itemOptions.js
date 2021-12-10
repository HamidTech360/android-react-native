import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function ItemOptions({label, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{label.label} </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text:{
        padding:20
    }
})
