import React from "react";
import PatientsContext from "./context/PatientsContext/PatientsContext";
import { globalStyles } from "./styles/globalStyles";
import Navigation from "./components/Navigation/Navigation";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  let [loaded] = useFonts({
    "pinyon-script-regular": require("./assets/fonts/PinyonScript/PinyonScript-Regular.ttf"),
    "quicksand-bold": require("./assets/fonts/Quicksand-Bold.ttf"),
  });

  if (!loaded) return <AppLoading />;

  return (
    <PatientsContext>
      <StatusBar backgroundColor="#BB22B5" style="light" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={globalStyles.screen}>
          <Navigation />
        </View>
      </TouchableWithoutFeedback>
    </PatientsContext>
  );
}
