import AddPatientContainer from "../../AddPatientContainer/AddPatientContainer";
import PatientRecords from "../../PatientRecords/PatientRecords";
import React from "react";
import RecordSearch from "../../RecordSearch/RecordSearch";
import RecordsTab from "../../BottomTabs/RecordsTab";
import { View } from "react-native";
import { bottomNavStyles } from "../../../styles/bottomNavStyles";
import { globalStyles } from "../../../styles/globalStyles";

export default function Records() {
  return (
    <View style={globalStyles.safeAreaView}>
      <AddPatientContainer />
      <RecordSearch />
      <PatientRecords />
      <View style={bottomNavStyles.NavContainerFlex}>
        <View style={bottomNavStyles.NavContainer}>
          <RecordsTab />
        </View>
      </View>
    </View>
  );
}
