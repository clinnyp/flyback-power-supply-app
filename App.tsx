import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/components/Home";

const axios = require("axios");

const Stack = createNativeStackNavigator();

export default function App() {
  // function handleOn() {
  //   axios.get("http://localhost:3000/on").catch((err) => {
  //     console.log(err);
  //   });
  // }

  // function handleOff() {
  //   axios.get("http://localhost:3000/off").catch((err) => {
  //     console.log(err);
  //   });
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Flyback Power-Supply" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
