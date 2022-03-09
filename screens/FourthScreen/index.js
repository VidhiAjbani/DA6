import React from "react";
import {Text, View, TouchableOpacity} from "react-native";


export default function FourthScreen({navigation}) {
    return (
        <View>
            <Text>Fourth Screen</Text>
            <TouchableOpacity onPress={()=>navigation.navigate("DrawerNav")} style={{backgroundColor:'red', padding:'2%'}}>
                <Text style={{color:'#fff', fontSize:18}}> Go to page 5</Text>
            </TouchableOpacity>         
        </View>
    );

}