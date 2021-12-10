import React from 'react'
import { StyleSheet, Text, View, Image,  TouchableHighlight  } from 'react-native'

import CustomIcon from './cutomIcon'
 const  listItem=({path,iconName,  description, value, onPress})=> {
    return (
        <TouchableHighlight 
            onPress = {onPress}
            underlayColor="purple"
        >
            <View style={styles.container}>
            <View style={styles.imageBox}>
                {path && <Image style={styles.image} source={path} />}
                {iconName && <CustomIcon name={iconName} size={50} color="white"/>}
            </View>
            <View style={styles.descriptionBox}>
                    <Text>{description}</Text>
                 { value && <Text style={styles.value}>{value}</Text> }
            </View>
        </View>
        </TouchableHighlight >
        
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        padding:15
    },
    imageBox:{
        flex:1
    },
    descriptionBox:{
        flex:3,
        justifyContent:'center'
    },
    image:{
        width:60,
        height:60,
        borderRadius:30
    },
    value:{
        color:'grey',
        fontWeight:'100'
    }
})
export default listItem;