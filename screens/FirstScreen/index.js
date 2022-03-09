import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function FirstScreen({ navigation }) {
  return (
    <View>
      <Text style={styles.text}>First Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Second")}
        style={styles.opacity}
      >
        <Text style={styles.touchButton}> Go to page 2</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 25,
    textAlign:'center',
    color: '#0C00BA',
  },

  touchButton : {
    marginTop: 0,
    fontWeight: "bold",
    fontSize: 25,
    textAlign:'center',
    color: '#FFFFFF',
  },

  opacity :{
    backgroundColor: "red", 
    padding: "2%",
    marginTop: 50
  }
});
