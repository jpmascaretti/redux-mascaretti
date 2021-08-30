import React from "react";

import AddPatientContainer from "../AddPatientContainer/AddPatientContainer";
import { View } from "react-native";
import DefaultHeader from "../DefaultHeader/DefaultHeader";

export default HeaderBar = ({ page }) => {
  return (
    <View>
      {(page.testsPage || page.dosesPage) && <DefaultHeader />}
      {page.recordsPage && <AddPatientContainer />}
    </View>
  );
};
