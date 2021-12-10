import React, {useState} from 'react';
import  Constants  from 'expo-constants';
import { 
          StyleSheet,  
          Platform,StatusBar, 
          Text,Image,TouchableHighlight, View, 
          SafeAreaView, TouchableNativeFeedback, 
          Button, Alert, ImageBackground, FlatList } from 'react-native';
//import {useDeviceOrientation} from '@react-native-community/hooks'

// import Screen from './components/screen1';
// import Screen2 from './components/screen2';
// import WelcomeScreen from './components/welcomeScreen';
// import FlatlistTemplate from './components/flatlist';
import InputBox from './components/textInput/textinput';
import AccountScreen from './accountScreen/accountScreen';
import AppPicker from './components/textInput/picker';
import Login from './form/login';

export default function App() {
  const [fname, setFname] = useState('')
  const [category, setCategory] = useState()
  const pickerItems=[
    {label:'Software Dev', value:1},
    {label:'furniture', value:2},
    {label:'Statistical Analyst', value:3}
  ]
  return (

      <SafeAreaView style ={styles.screen}>
       
          <AccountScreen/>
          {/* <AppPicker 
            icon="apps" 
            placeholder="Select category" 
            pickerItems={pickerItems} 
            selectedItem={category}
            handleSelectItem ={(item)=>setCategory(item)}
          />
          <InputBox
            onChange={text=>setFname(text)}
            stateValue={fname}
            icon="mail"
            placeholder="first Name"
          /> */}
          <Login/>
       </SafeAreaView> 
 
  );
}

const styles = StyleSheet.create({
  screen:{
    paddingTop: Constants.statusBarHeight,
    backgroundColor:'whitesmoke',
    flex:1
  },
})
