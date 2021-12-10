import React, {useState} from 'react'
import { StyleSheet, Text, View, Image,  TouchableHighlight, Switch  } from 'react-native'

import CustomIcon from './cutomIcon'
 const  listItem=({path,iconName,iconBg,  description, value, onPress, showSwitch})=> {

    const [isNew, setIsNew] = useState(false)


    return (
        <TouchableHighlight 
            onPress = {onPress}
            underlayColor="purple"
        >
            <View style={styles.container}>
                <View style={styles.imageBox}>
                    {path && <Image style={styles.image} source={path} />}
                    {iconName && <CustomIcon name={iconName} size={40} color="white" iconBg={iconBg} />}
                </View>
                <View style={styles.descriptionBox}>
                        <Text>{description}</Text>
                    { value && <Text style={styles.value}>{value}</Text> }
                </View>
                {showSwitch && <Switch value={isNew} onValueChange={newstate =>setIsNew(newstate)} style={{marginRight:20}} />}
            </View>
        </TouchableHighlight >
        
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        padding:15,
        backgroundColor:'white'
    },
    imageBox:{
        // flex:1
        marginRight:10
    },
    descriptionBox:{
        // flex:4,
        marginRight:5,
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