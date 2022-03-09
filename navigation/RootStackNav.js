import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FirstScreen from "../screens/FirstScreen";
import SecondScreen from "../screens/SecondScreen";
import ThirdScreen from "../screens/ThirdScreen";
import FourthScreen from "../screens/FourthScreen";
import FifthScreen from "../screens/FifthScreen";
import SixthScreen from "../screens/SixthScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Third" component={ThirdScreen} />
      <Tab.Screen name="Fourth" component={FourthScreen} />
    </Tab.Navigator>
  );
}

function DrawerNav() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Fifth" component={FifthScreen} />
      <Drawer.Screen name="Sixth" component={SixthScreen} />
    </Drawer.Navigator>
  );
}

export default function RootStackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="First" component={FirstScreen} />
      <Stack.Screen name="Second" component={SecondScreen} />
      <Stack.Screen
        name="TabNav"
        component={TabNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DrawerNav"
        component={DrawerNav}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
