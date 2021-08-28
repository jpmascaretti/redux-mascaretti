import React from "react";
import PatientsContext from "./context/PatientsContext/PatientsContext";
import RecordSearch from "./components/RecordSearch/RecordSearch";
import PatientRecords from "./components/PatientRecords/PatientRecords";
import { globalStyles } from "./styles/globalStyles";
import HeaderBar from "./components/HeaderBar/HeaderBar";
import TabBar from "./components/BottomNavigation/TabBar";

import { View } from "react-native";

export default function App() {
  return (
    <PatientsContext>
      <View style={globalStyles.screen}>
        <HeaderBar />
        <RecordSearch></RecordSearch>
        <PatientRecords></PatientRecords>
        <TabBar></TabBar>
      </View>
    </PatientsContext>
  );
}
