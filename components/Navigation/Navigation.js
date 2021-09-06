import React, { useState } from "react";
import TabBar from "../BottomNavigation/TabBar";
import HeaderBar from "../HeaderBar/HeaderBar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
// import Doses from "../Screens/Doses";
import Records from "../Screens/Records";
// import Tests from "../Screens/Tests";

const Stack = createNativeStackNavigator();

const ROUTES = {
  RECORDS: "records",
  DOSES: "doses",
  TESTS: "tests",
};


const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <HeaderBar page={navPage} /> */}
      <Stack.Navigator initialRouteName="records">
        <Stack.Screen name={ROUTES.RECORDS} component={Records} />
        {/* <Stack.Screen name={ROUTES.DOSES} component={Doses} />
        <Stack.Screen name={ROUTES.TESTS} component={Tests} /> */}
      </Stack.Navigator>
      {/* <TabBar page={navPage} setPage={setNavPage} /> */}
    </NavigationContainer>
  );
};

export default Navigation;

// const [navPage, setNavPage] = useState({
//   recordsPage: true,
//   dosesPage: false,
//   testsPage: false,
// });

{
  /* {navPage.recordsPage && (
        <SafeAreaView>
          <RecordSearch page={navPage} />
          <PatientRecords />
        </SafeAreaView>
      )}
      {navPage.dosesPage && (
        <View>
          <Text style={{ fontFamily: "pinyon-script-regular", fontSize: 30 }}>
            Doses Page to be developed
          </Text>
        </View>
      )}
      {navPage.testsPage && (
        <View>
          <Text style={{ fontFamily: "pinyon-script-regular", fontSize: 30 }}>
            Tests Page to be developed
          </Text>
        </View>
      )} */
}
