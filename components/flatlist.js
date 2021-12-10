import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import ListItem from './listItem';
import Divider from './divider';
import ListItemDeleteAction from './listItemDeleteAction';
 const FlatlistTemplate=()=> {
    const Messages = [
        {
          id:1,
          description:'description',
          value:'value',
          image:require('../assets/img_5.jpg'),
          iconName: 'mail'
        },
        {
          id:2,
          description:'description',
          value:'value',
          image:require('../assets/assasin.jpg'),
          iconName:'trash-can'
        },
        {
          id:3,
          description:'description',
          value:'value',
          image:require('../assets/banner.jpg'),
          iconName:'phone'
        }
      ]
     
    return (
            
            <FlatList
                 data={Messages}
                 keyExtractor={message=>message.id.toString()}
                 renderItem={({item})=>
                     <ListItem
                       
                         description={item.description}
                         value = {item.value}
                         iconName ={item.iconName}
                         onPress ={()=>console.log(item)}
                         renderRightActions = {()=>(
                            <ListItemDeleteAction
                            onPress ={()=>console.log(item)}
                        />)
                        }
                      />
                }
                
               ItemSeparatorComponent={Divider}
               refreshing={true}
            />


           
       
    )
}

const styles = StyleSheet.create({

})
export default FlatlistTemplate;