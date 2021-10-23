import { Text, View, TouchableOpacity } from "react-native";
import DefaultHeader from "../../DefaultHeader/DefaultHeader";
import React from "react";
import TestsTab from "../../BottomTabs/TestsTab";
import { bottomNavStyles } from "../../../styles/bottomNavStyles";
import { globalStyles } from "../../../styles/globalStyles";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function Tests() {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.safeAreaView}>
      <DefaultHeader />
      <View style={globalStyles.testsContainer}>
        <LinearGradient
          colors={["#BB22B5", "#96EAEF"]}
          style={globalStyles.testsLinearGradient}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Glasgow")}>
            <View style={globalStyles.testsCard}>
              <MaterialCommunityIcons
                name="head-check-outline"
                size={70}
                color="white"
                style={globalStyles.glasgowIcon}
              />
              <Text style={globalStyles.glasgowText}>Glasgow Test</Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={["#BB22B5", "#96EAEF"]}
          style={globalStyles.linearGradientApgar}
        >
          <TouchableOpacity>
            <View style={globalStyles.testsCard}>
              <FontAwesome
                style={globalStyles.glasgowIcon}
                name="heartbeat"
                size={60}
                color="white"
              />
              <Text style={globalStyles.glasgowText}>Apgar Test</Text>
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
