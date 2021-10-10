import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import DefaultHeader from "../../DefaultHeader/DefaultHeader";
import React from "react";
import TestsTab from "../../BottomTabs/TestsTab";
import { bottomNavStyles } from "../../../styles/bottomNavStyles";
import { globalStyles } from "../../../styles/globalStyles";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Tests() {
    const navigation = useNavigation();

  return (
    <View style={globalStyles.safeAreaView}>
      <DefaultHeader />
      <View style={styles.testsContainer}>
        <LinearGradient
          colors={["#BB22B5", "#96EAEF"]}
          style={styles.linearGradient}
        >
          <TouchableOpacity

          >
            <View style={styles.testsCard}>
              <MaterialCommunityIcons
                name="head-check-outline"
                size={70}
                color="white"
                style={styles.glasgowIcon}
              />
              <Text style={styles.glasgowText}>Glasgow Test</Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={["#BB22B5", "#96EAEF"]}
          style={styles.linearGradientApgar}
        >
          <TouchableOpacity

          >
            <View style={styles.testsCard}>
              <FontAwesome
                style={styles.glasgowIcon}
                name="heartbeat"
                size={60}
                color="white"
              />
              <Text style={styles.glasgowText}>Apgar Test</Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={bottomNavStyles.NavContainerFlex}>
        <View style={bottomNavStyles.NavContainer}>
          <TestsTab />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  testsContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  linearGradient: {
    width: "80%",
    height: 90,
    borderRadius: 15,
  },
  testsCard: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  glasgowIcon: {
    marginLeft: 25,
  },
  glasgowText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 60,
  },
  apgarCard: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  linearGradientApgar: {
    width: "80%",
    height: 90,
    borderRadius: 15,
    marginTop: 15,
  },
});
