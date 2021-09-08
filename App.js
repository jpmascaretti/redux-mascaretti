import React from "react";
import { globalStyles } from "./styles/globalStyles";
import Navigation from "./components/Navigation/Navigation";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  let [loaded] = useFonts({
    "pinyon-script-regular": require("./assets/fonts/PinyonScript/PinyonScript-Regular.ttf"),
    "quicksand-bold": require("./assets/fonts/Quicksand-Bold.ttf"),
  });

  if (!loaded) return <AppLoading />;

  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#BB22B5" style="light" />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={globalStyles.screen}>
          <Navigation />
        </View>
      </TouchableWithoutFeedback>
    </Provider>
  );
}
