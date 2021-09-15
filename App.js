import { Keyboard, TouchableWithoutFeedback, View } from "react-native";

import AppLoading from "expo-app-loading";
import MainNavigator from "./components/Navigation/MainNavigator";
import { Provider } from "react-redux";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { globalStyles } from "./styles/globalStyles";
import store from "./store";
import { useFonts } from "expo-font";

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
          <MainNavigator />
        </View>
      </TouchableWithoutFeedback>
    </Provider>
  );
}
