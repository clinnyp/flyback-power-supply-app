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
import Slider from "@react-native-community/slider";
import { NavigationContainer } from "@react-navigation/native";
import { VictoryChart, VictoryLine } from "victory-native";
import io from "socket.io-client";
import Toast from "react-native-toast-message";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

const connectionSuccessful = () => {
  Toast.show({
    type: "success",
    text1: "Connection Successful",
    text2: "Ready to set output voltage⚡",
  });
};

function handleSetVoltage(desiredVoltage: number) {
  axios.post("http://localhost:3000/voltage", { voltage: desiredVoltage });
}

const voltage = new Uint8Array([100]);

const socket = io("http://172.23.75.88:3000");

function Home() {
  const [desiredVoltage, setDesiredVoltage] = useState(0);

  useEffect(() => {
    connectionSuccessful();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontSize: 36, fontWeight: "bold" }}>
          {desiredVoltage == 0 ? "Select output voltage" : `${desiredVoltage}V`}
        </Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 80,
          }}
        >
          <VictoryChart
            width={350}
            minDomain={{ x: 1, y: 0 }}
            maxDomain={{ x: 5, y: 35 / 2 }}
          >
            <VictoryLine
              data={[
                { x: 1, y: 5 },
                { x: 2, y: 5.1 },
                { x: 3, y: 4.9 },
                { x: 4, y: 4.9 },
                { x: 5, y: 5.1 },
              ]}
            />
          </VictoryChart>

          {/* <TextInput
              style={styles.input}
              onChangeText={(t) => setDesiredVoltage(t)}
              placeholder="desired mV"
              textAlign="center"
              keyboardType="numeric"
              maxLength={5}
            /> */}

          <Slider
            style={{ width: 350, height: 40 }}
            minimumValue={5}
            onValueChange={(value) => setDesiredVoltage(value)}
            step={1}
            maximumValue={30}
            minimumTrackTintColor="green"
            maximumTrackTintColor="#D3D3D3"
          />
          <Button
            onPress={() => {
              console.log("pressed");
              handleSetVoltage(desiredVoltage);
            }}
            title="Set Voltage ⚡"
            color="#841584"
          />
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
