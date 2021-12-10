import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList, Platform, TouchableWithoutFeedback, Modal, Button } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import  Constants  from 'expo-constants'
import ItemOptions from './itemOptions'

 const AppPicker = ({onChange, icon, placeholder, pickerItems, selectedItem, handleSelectItem})=> {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
                <View  style ={styles.container  }>
                    
                    {icon && <MaterialCommunityIcons name ={icon} size={25} color="rgb(99, 89, 89)" style={{marginRight: 10}}/>}
                    <Text style={styles.placeholderText}> {selectedItem ? selectedItem.label: placeholder}  </Text>
                    <MaterialCommunityIcons name ="chevron-down" size={25} color="rgb(99, 89, 89)"/> 
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} style={styles.modal} animationType="slide">
                <Button title="close modal" onPress={()=>setModalVisible(false)} />
                <FlatList
                    data={pickerItems}
                    keyExtractor={(item)=> item.value.toString()}
                    renderItem={({item})=>
                        <ItemOptions 
                            label={item} 
                            onPress={()=>{
                                setModalVisible(false)
                                handleSelectItem(item)
                            }}
                        />
                    }
                />
            </Modal>
        </>
       
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
    },
    placeholderText:{
        flex:1
    },
    modal:{
        paddingTop: Constants.statusBarHeight
    }
})
export default AppPicker