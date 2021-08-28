import React from "react";
import PatientsContext from "./context/PatientsContext/PatientsContext";
import { globalStyles } from "./styles/globalStyles";
import Navigation from "./components/Navigation/Navigation";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";


export default function App() {
  return (
    <PatientsContext>
      <StatusBar backgroundColor="#BB22B5" style="light" />
      <View style={globalStyles.screen}>
        <Navigation />
      </View>
    </PatientsContext>
  );
}
