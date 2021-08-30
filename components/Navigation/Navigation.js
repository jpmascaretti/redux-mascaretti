import React, { useState } from "react";
import RecordSearch from "../RecordSearch/RecordSearch";
import PatientRecords from "../PatientRecords/PatientRecords";
import TabBar from "../BottomNavigation/TabBar";
import HeaderBar from "../HeaderBar/HeaderBar";
import { View, Text, SafeAreaView } from "react-native";

const Navigation = () => {
  const [navPage, setNavPage] = useState({
    recordsPage: true,
    dosesPage: false,
    testsPage: false,
  });

  return (
    <>
      <HeaderBar page={navPage} />
      {navPage.recordsPage && (
        <SafeAreaView>
          <RecordSearch page={navPage} />
          <PatientRecords />
        </SafeAreaView>
      )}
      {navPage.dosesPage && (
        <View>
          <Text style={{ fontFamily: 'pinyon-script-regular', fontSize: 30 }}>Doses Page to be developed</Text>
        </View>
      )}
      {navPage.testsPage && (
        <View>
          <Text style={{ fontFamily: 'pinyon-script-regular', fontSize: 30 }}>Tests Page to be developed</Text>
        </View>
      )}
      <TabBar page={navPage} setPage={setNavPage} />
    </>
  );
};

export default Navigation;

