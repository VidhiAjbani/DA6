import React from "react";
import {Text, View, TouchableOpacity} from "react-native";


export default function ThirdScreen({navigation}) {
    return (
        <View>
            <Text>Third Screen</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("First")} style={{backgroundColor:'red', padding:'2%'}}>
                <Text style={{color:'#fff', fontSize:18}}> Go to page 1</Text>
            </TouchableOpacity>
        </View>
    );

}