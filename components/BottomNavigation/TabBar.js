import React from "react";
import { View } from "react-native";
import BarPositionOne from "./BarPositionOne";
import BarPositionThree from "./BarPositionThree";
import BarPositionTwo from "./BarPositionTwo";
import { bottomNavStyles } from "../../styles/bottomNavStyles";

const TabBar = ({ page, setPage }) => {
  return (
    <View style={bottomNavStyles.NavContainerFlex}>
      <View style={bottomNavStyles.NavContainer}>
        {page.recordsPage && <BarPositionOne setPage={setPage} />}
        {page.dosesPage && <BarPositionTwo setPage={setPage} />}
        {page.testsPage && <BarPositionThree setPage={setPage} />}
      </View>
    </View>
  );
};

export default TabBar;
