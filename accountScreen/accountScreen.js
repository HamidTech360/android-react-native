import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, Switch } from 'react-native'
import  Constants  from 'expo-constants'


import ListItem from './components/listItem'
import Divider from '../components/divider'
const AccountScreen = ()=> {
    
   
    const data = [
        {
            icon:{
                iconName:'format-list-bulleted',
                bgColor:'red',
            },
            label:'my Listing'
        },
        {
            icon:{
                iconName:'mail',
                bgColor:'green',
            },
            label:'My Messages'
        }
    ]
    return (
        <View style ={styles.container}>

            <View style={styles.toplist}>
                <ListItem
                    path={require('../assets/meda.jpg')}
                    description="Medaweb Software De Magneficient"
                    value="owolabihammed2001@gmail.com"
                    onPress={()=>console.log('senior man')}
                    showSwitch
                />
            </View>

            <View style={styles.flatlist}>
                <FlatList
                    data ={data}
                    keyExtractor = {item=>item.label}
                    renderItem= {({item})=> 
                        <ListItem
                            iconName={item.icon.iconName}
                            description={item.label}
                            iconBg={item.icon.bgColor}
                            onPress={()=>console.log(item)}
                        />
                    }
                    ItemSeparatorComponent = {Divider }
                   
                />
            </View>

        </View>

        
    )
}

const styles = StyleSheet.create({
    toplist:{
       marginBottom:20
    }
})
export default AccountScreen