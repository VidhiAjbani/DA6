import React from "react";
import {Text, View, TouchableOpacity} from "react-native";


export default function SixthScreen({navigation}) {
    return (
        <View>
            <Text>Sixth Screen</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Fourth")} style={{backgroundColor:'red', padding:'2%'}}>
                <Text style={{color:'#fff', fontSize:18}}> Go to page 4</Text>
            </TouchableOpacity>
        </View>
    );

}