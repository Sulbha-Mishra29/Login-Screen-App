import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { render } from 'react-dom';
import { View, Text, TextInput, TouchableOpacity,StyleSheet,Image,ImageBackground} from 'react-native';

export default function App() {

  const [passKey,setPassKey] = useState(true);

 return (
    <View style={{flex:1}}>
    <Image source = {require('./components/blurBg.png')}
    style = {{ width: 100+"%", height: 100+"%",resizeMode:"cover" }}
    />
    <View style={styles.container}>
    <Image source = {require('./components/react_logo.png')}
    style = {{ width: 160, height: 150 }}
    />
    <Text style={styles.logo}>React-Native</Text>
    <View style={styles.inputView} >
      <TextInput  
        style={styles.inputText}
        placeholder="Email..." 
        placeholderTextColor="white"
        />
    </View>
    <View style={styles.inputView} >
      <TextInput  
        secureTextEntry={passKey}
        style={styles.inputText}
        placeholder="Password..." 
        placeholderTextColor="white"
        />
        <TouchableOpacity 
        onPress={()=>{passKey?setPassKey(false):setPassKey(true)}}
        style={{width:20+"%",height:100+"%",justifyContent:"center",alignItems:"center"}}>
        <Image source = {require('./components/password.png')}
        style = {{ width: 70+"%", height: 40+"%",resizeMode:"contain" }}
        />
        </TouchableOpacity>
    </View>
    <TouchableOpacity >
      <Text style={styles.forgot}>Forgot Password?</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.loginBtn}>
      <Text style={styles.loginText}>LOGIN</Text>
    </TouchableOpacity>
    <TouchableOpacity>
      <Text style={styles.loginText}>Signup</Text>
    </TouchableOpacity>
    </View>
    </View>
    );
 };

const styles = StyleSheet.create({
  container: {
    width:100+"%",
    height:100+"%",
    alignItems: 'center',
    justifyContent:"center",
    position:"absolute"

  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"white",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"rgba(0,0,0,0.3)",
    borderRadius:25,
    height:50,
    marginBottom:20,
    alignItems:"center",
    flexDirection:"row",
    paddingHorizontal:20,
    justifyContent:"space-between"
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#00FA9A",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }

  });
