import React from 'react';
import {SafeAreaView, View, StyleSheet,Text, Button} from 'react-native'
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import { AntDesign } from '@expo/vector-icons';


const WelcomeScreen = () => {
    return ( 
       
            <View style ={styles.container}>
                <ImageBackground 
                    blurRadius={0}
                    style={styles.imageBackground} 
                    source={require('../assets/incept.jpg')}
                    resizeMode="cover"
                >
                    <View style={styles.headerBox}>
                        <AntDesign name="dingding" size={120} color="purple" />
                        <Text style ={styles.headerText}>Quality home booking</Text>
                    </View>
                    <View style={styles.loginBox}>
                        <Button 
                            title="Login" 
                            color="purple"
                            onPress={()=>alert('all is good')}
                        >

                        </Button>
                    </View>

                </ImageBackground>
            </View>
        
     )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        height:"100%",
        
    },
    imageBackground:{
        width:'100%',
        flex:1,
        paddingTop:40
    },
    headerBox:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:70
    },
    headerText:{
        fontFamily:'Roboto',
        color:'rgb(192, 40, 192)',
        fontWeight:'900',
        fontSize:15
    },
    loginBox:{
        position:'absolute',
        top:'80%',
        width:'100%',
        padding:10
    }
})

 
export default WelcomeScreen;