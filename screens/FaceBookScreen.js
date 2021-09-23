import React from 'react';
import {View, Text} from 'react-native';


export default class FaceBookScreen extends React.Component{
  render(){
    return(
      <View>
      <Text style={{textAlign:'center', backgroundColor:'blue', fontSize:30, fontWeight:'bold', marginTop:20}}>
      Buzz App
      </Text>
      <View style = {{flex:1, alignItems:"center", justifyContent:"center", alignSelf:'center', marginTop:200}}>
      <Text>FaceBook</Text>
      </View>
      </View>
    )
  }
}