import React from "react";
import { 
    StyleSheet,  
    Platform,StatusBar, 
    Text,Image,TouchableHighlight, View, 
    SafeAreaView, TouchableNativeFeedback, 
    Button, Alert, ImageBackground } from 'react-native';
import {useDeviceOrientation} from '@react-native-community/hooks'

const Screen2 = () => {
    const potrait = useDeviceOrientation()
    return (
    <SafeAreaView style={styles.container}>
        <Text>This is my first App! lorem2 </Text>
        <TouchableHighlight onPress={()=>console.log('image clicked')}>
          <Image 
            source= {require('../assets/mem.jpg')} 
            width={200} height={10} 
            fadeDuration={1000}
            style={{height:70}}
          />
        </TouchableHighlight>
        <TouchableNativeFeedback>
            <View style={{width:200, height:70, backgroundColor:'red'}}>

            </View>
        </TouchableNativeFeedback>

        <Button
         title="click me" 
         color={potrait.landscape? 'blue':'green'} 
         onPress={()=>Alert.alert('my customized alert', 'the actual message', 
            [
              {text:'yes', onPress:()=>console.log('yes was clciked')},
              {text:'No', onPress:()=>console.log('No was clciked')}
            ])
        }
        />

        <Button 
          title="click to propmpt"
          onPress={()=>Alert.prompt('Are You ready for react', 'Are You Really ready for react-native')}
        />
       <View style={{ flex:1,  justifyContent:'center', flexDirection:'row-reverse', alignItems:'center', ...styles.container}}>
            <View style={{backgroundColor:'red', flex:1, width:100, height:100}}/>
            <View style={{backgroundColor:'pink', flex:1, width:100, height:100}}/>
            <View style={{backgroundColor:'orange', flex:1, width:100, height:100}}/>
         </View>
       
        
        <ImageBackground   style={styles.background} source={require('../assets/img_5.jpg')}>
          
        </ImageBackground>
       
     </SafeAreaView>
      );
}
    const styles = StyleSheet.create({
        container: {
    
        backgroundColor: 'yellow',
        
        paddingTop:Platform.OS==="android"?StatusBar.currentHeight:0
        },
        background:{
        flex:1,
        
        }
    });
export default Screen2