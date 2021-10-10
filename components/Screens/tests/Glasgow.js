import React, {useState} from "react";
import RecordsTab from "../../BottomTabs/RecordsTab";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { bottomNavStyles } from "../../../styles/bottomNavStyles";
import { globalStyles } from "../../../styles/globalStyles";
import DefaultHeader from "../../DefaultHeader/DefaultHeader";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Glasgow() {
  const navigation = useNavigation();
  const [selectedEyeOpeningResponse, setSelectedEyeOpeningResponse] = useState(null)

  return (
    <View style={globalStyles.safeAreaView}>
      <DefaultHeader />
      <TouchableOpacity
        style={globalStyles.backToRecords}
        onPress={() => navigation.navigate("Tests")}
      >
        <AntDesign name="arrowleft" size={24} color="#C4C4C4" />
        <Text style={globalStyles.btrText}>Back to Records</Text>
      </TouchableOpacity>
      <View style={styles.glasgowView}>
        <Text style={styles.glasgowText}>Glasgow Test</Text>
        <View style={styles.glasgowBanner}>
          <Text style={styles.glasgowBannerText}>Eye Opening Response</Text>
        </View>
        <ScrollView horizontal={true} contentContainerStyle={styles.scrollViewContainer}>
          <TouchableOpacity style={[styles.glasgowCard,globalStyles.bottomShadow]} onPress={() => setSelectedEyeOpeningResponse('Spontaneously')}>
            <Text>Spontaneously</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.glasgowCard,globalStyles.bottomShadow]} onPress={() => setSelectedEyeOpeningResponse('To Speech')}>
            <Text>To Speech</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.glasgowCard,globalStyles.bottomShadow]} onPress={() => setSelectedEyeOpeningResponse('To Pain')}>
            <Text>To Pain</Text>
          </TouchableOpacity>
          <TouchableOpacity style={selectedEyeOpeningResponse === 'Unresponsive' ? [styles.selectedGlasgowCard,globalStyles.bottomShadow] : [styles.glasgowCard,globalStyles.bottomShadow]} onPress={() => setSelectedEyeOpeningResponse('Unresponsive')}>
            <Text>Unresponsive</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={bottomNavStyles.NavContainerFlex}>
        <View style={bottomNavStyles.NavContainer}>
          <RecordsTab />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  glasgowText: {
    fontSize: 22,
    color: "black",
    fontWeight: "bold",
    marginTop: 20,
  },
  glasgowView: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  glasgowBanner: {
    height: 40,
    width: "100%",
    backgroundColor: "#96EAEF",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  glasgowBannerText: {
    fontSize: 16,
    color: "#BB22B5",
    fontWeight: "bold",
  },
  scrollViewContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  glasgowCard: {
    width: 120,
    height: 60,
    backgroundColor: '#EDEDED',
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectedGlasgowCard: {
    width: 120,
    height: 60,
    backgroundColor: '#FAA7F6',
    margin: 10,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
