import React from "react";
import {Text, View, TouchableOpacity} from "react-native";


export default function SecondScreen({navigation}) {
    return (
        <View>
            <Text>Second Screen</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("TabNav")} style={{backgroundColor:'red', padding:'2%'}}>
                <Text style={{color:'#fff', fontSize:18}}> Go to page 3</Text>
            </TouchableOpacity>
            
        </View>
    );

}