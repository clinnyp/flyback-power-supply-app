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
import { NavigationContainer } from "@react-navigation/native";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

function Home() {
  const [text, setText] = useState("before call");
  const [desiredVoltage, setDesiredVoltage] = useState("0");

  return (
    <>
      <View style={styles.container}>
        <View style={{ paddingTop: 50, justifyContent: "space-evenly" }}>
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
              onPress={() =>
                console.log(`desired voltage is: ${desiredVoltage}`)
              }
              title="Set Voltage ⚡"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
            />
          </KeyboardAwareScrollView>
        </View>
      </View>
    </>
  );
}

export default Home;

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
