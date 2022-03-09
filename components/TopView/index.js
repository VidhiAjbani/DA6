import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { UseCountContext } from '../../contextAPI/countContextProvider';
//import Comp1 from '../../comp1';
//import Comp2 from '../../comp2';

export default function TopView() {
  //const[input,setInput]=useState(0);
  //console.log(input);
  const countContext=UseCountContext();
  return (
    <View style={styles.container}>
      <Text style={{color:"#000"}}>{countContext.count}</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={{display:'flex',flexDirection:'row', backgroundColor:'blue'}} onPress={()=>countContext.setCount(countContext.count+1)}>
          <Text>Text me</Text>
      </TouchableOpacity>

      <Text style={{color:"#000"}}>{countContext.count2}</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={{display:'flex',flexDirection:'row', backgroundColor:'green'}} onPress={()=>countContext.setCount2(countContext.count2+1)}>
          <Text>Text me</Text>
      </TouchableOpacity>

      <Text style={{color:"#000"}}>{countContext.count3}</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={{display:'flex',flexDirection:'row', backgroundColor:'red'}} onPress={()=>countContext.setCount3(countContext.count3+1)}>
          <Text>Text me</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
