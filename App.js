
import React, { Component,useState,useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Label,
} from 'react-native';

var error={'change':''}

class Inputs extends Component {
  state = {
    name:'',
    aadhar:' ',
    email: '',
    password: '',
    repassword:' ',
    jsonData:'',
    currentLatitude:'',
    currentLongitude:'',
  };
  
  login(){
    var status=true;

    if(this.state.password!=this.state.repassword)
        error.change='password not matching';
        status=false
    
    if(status)
      return ;
      
    navigator.geolocation.getCurrentPosition( (position) => 
    { 
      fetch("https://1d8c39c5.ngrok.io/api/my", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name:this.state.name,
          aadhar:this.state.aadhar,
          email:this.state.email,
          password:this.state.password,
          latitude:position.coords.latitude,
          longitude:position.coords.longitude
        })
    })
        .then((response) => response.json())
        .then((responseData) => {
            console.log(JSON.stringify(responseData))
        })
        .done();
        console.log(this.state)

    }, 
    (error) => console.log(new Date(), error), 
    {enableHighAccuracy: true, timeout: 10000, maximumAge: 3000} );

   }
  render() {
    return (

        <View style={styles.container}>


        <Text>Name</Text>
        <TextInput
          value={this.state.name}
          style={styles.input}
          onChangeText={(name) => this.setState({name})}
        />
        <Text>Aadhar</Text>
        <TextInput 
        
          value={this.state.aadhar} 
          onChangeText={(aadhar) => this.setState({aadhar})} 
          style={styles.input}
        />
        
        <Text>Email</Text>
        <TextInput 
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
            style={styles.input}
        />
        <Text>Password</Text>
        <TextInput 
            secureTextEntry 
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
            style={styles.input}
        />
        <Text>Reenter password</Text>
        <TextInput 
            secureTextEntry
            value={this.state.repassword}
            style={styles.input}
             onChangeText={(repassword) => this.setState({repassword})}
        />
        <Text>{error.change}</Text>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => this.login(this.state.email, this.state.password)}>
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Inputs;


const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    paddingLeft: 20,
  },
  focused: {
    borderColor: 'green',
    margin: 15,
    height: 40,
    fontSize: 24,
    backgroundColor: 'lightgrey',
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    alignContent: 'center',
    padding: 10,
    alignItems: 'center',
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
  },
  bar:{
    backgroundColor:'red',
    margin:15,
    width:10,
  }
});
