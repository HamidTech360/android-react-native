import React, {useState} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import ApTextInput from './components/ApTextInput'



const Login=()=> {

    const [username, SetUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View>
            <ApTextInput 
                icon="phone" 
                placeholder="Enter Username"
                onChangeText={(text)=>SetUsername(text)}
             />
             <ApTextInput
                 icon="phone" 
                 placeholder="Enter password"
                 keyboardType="password"
                 onChangeText={(text)=>setPassword(text)}
             />
             <Button
                 style={{BackgroundColor:'red'}}
                title="Submit"
                onPress={()=>console.log(username, password)}
             />
        </View> 
    )
}

const styles = StyleSheet.create({
    button:{
        width:200,
        color:'red'
    }
})
export default Login