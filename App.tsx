import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

const axios = require("axios");

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

export default function App() {
  const [text, setText] = useState("before call");
  const [desiredVoltage, setDesiredVoltage] = useState("0");

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
    <View style={styles.container}>
      {/* <Button
        onPress={handleOn}
        title="Turn On LED"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={handleOff}
        title="Turn Off LED"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      /> */}
      <View style={{ paddingTop: 150, justifyContent: "space-evenly" }}>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryBar data={data} x="quarter" y="earnings" />
        </VictoryChart>
        <KeyboardAwareScrollView>
          <TextInput
            style={styles.input}
            onChangeText={(t) => setDesiredVoltage(t)}
            placeholder="desired mV"
            textAlign="center"
            keyboardType="numeric"
            maxLength={5}
          />
          <Button
            onPress={() => console.log(`desired voltage is: ${desiredVoltage}`)}
            title="Set Voltage"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </KeyboardAwareScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    flex: 1,
    width: "100%",
    borderWidth: 1,
    padding: 10,
  },
});
