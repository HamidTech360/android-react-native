import React from 'react'
import { StyleSheet, View , TouchableWithoutFeedback} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

const ListItemDeleteAction=()=> {
    return (
        <TouchableWithoutFeedback>
             <View style = {styles.container}>
                <MaterialCommunityIcons name="trash-can" size={200} color="white" />
            </View>
        </TouchableWithoutFeedback>
       
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'green',
        justifyContent:'center',
        width:200,
        alignItems:'center'
    }
})
export default ListItemDeleteAction