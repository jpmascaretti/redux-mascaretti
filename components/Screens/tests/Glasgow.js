import React, { useState } from "react";
import TestsTab from "../../BottomTabs/TestsTab";
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
  const [selectedEyeOpeningResponse, setSelectedEyeOpeningResponse] =
    useState(null);
  const [selectedVerbalResponse, setSelectedVerbalResponse] =
    useState(null);

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
        <View style={styles.scrollViewHeight}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.scrollViewContainer}
          >
            <TouchableOpacity
              style={
                selectedEyeOpeningResponse === "Spontaneously"
                  ? [styles.selectedGlasgowCard, globalStyles.bottomShadow]
                  : [styles.glasgowCard, globalStyles.bottomShadow]
              }
              onPress={() => setSelectedEyeOpeningResponse("Spontaneously")}
            >
              <Text
                style={
                  selectedEyeOpeningResponse === "Spontaneously"
                    ? styles.selectedGlasgowCardText
                    : styles.glasgowCardText
                }
              >
                Spontaneously
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                selectedEyeOpeningResponse === "To Speech"
                  ? [styles.selectedGlasgowCard, globalStyles.bottomShadow]
                  : [styles.glasgowCard, globalStyles.bottomShadow]
              }
              onPress={() => setSelectedEyeOpeningResponse("To Speech")}
            >
              <Text
                style={
                  selectedEyeOpeningResponse === "To Speech"
                    ? styles.selectedGlasgowCardText
                    : styles.glasgowCardText
                }
              >
                To Speech
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                selectedEyeOpeningResponse === "To Pain"
                  ? [styles.selectedGlasgowCard, globalStyles.bottomShadow]
                  : [styles.glasgowCard, globalStyles.bottomShadow]
              }
              onPress={() => setSelectedEyeOpeningResponse("To Pain")}
            >
              <Text
                style={
                  selectedEyeOpeningResponse === "To Pain"
                    ? styles.selectedGlasgowCardText
                    : styles.glasgowCardText
                }
              >
                To Pain
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                selectedEyeOpeningResponse === "Unresponsive"
                  ? [styles.selectedGlasgowCard, globalStyles.bottomShadow]
                  : [styles.glasgowCard, globalStyles.bottomShadow]
              }
              onPress={() => setSelectedEyeOpeningResponse("Unresponsive")}
            >
              <Text
                style={
                  selectedEyeOpeningResponse === "Unresponsive"
                    ? styles.selectedGlasgowCardText
                    : styles.glasgowCardText
                }
              >
                Unresponsive
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.glasgowBanner}>
            <Text style={styles.glasgowBannerText}>Best Verbal Response</Text>
        </View>
        <View style={styles.scrollViewHeight}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.scrollViewContainer}
          >
            <TouchableOpacity
              style={
                selectedVerbalResponse === "Oriented"
                  ? [styles.selectedGlasgowCard, globalStyles.bottomShadow]
                  : [styles.glasgowCard, globalStyles.bottomShadow]
              }
              onPress={() => setSelectedVerbalResponse("Oriented")}
            >
              <Text
                style={
                  selectedVerbalResponse === "Oriented"
                    ? styles.selectedGlasgowCardText
                    : styles.glasgowCardText
                }
              >
                Oriented
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                selectedVerbalResponse === "Confused"
                  ? [styles.selectedGlasgowCard, globalStyles.bottomShadow]
                  : [styles.glasgowCard, globalStyles.bottomShadow]
              }
              onPress={() => setSelectedVerbalResponse("Confused")}
            >
              <Text
                style={
                  selectedVerbalResponse === "Confused"
                    ? styles.selectedGlasgowCardText
                    : styles.glasgowCardText
                }
              >
                Confused
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                selectedVerbalResponse === "Innapropiate Words"
                  ? [styles.selectedGlasgowCard, globalStyles.bottomShadow]
                  : [styles.glasgowCard, globalStyles.bottomShadow]
              }
              onPress={() => setSelectedVerbalResponse("Innapropiate Words")}
            >
              <Text
                style={
                  selectedVerbalResponse === "Innapropiate Words"
                    ? styles.selectedGlasgowCardText
                    : styles.glasgowCardText
                }
              >
                Innapropiate Words
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                selectedVerbalResponse === "Incomprehensible Sounds"
                  ? [styles.selectedGlasgowCard, globalStyles.bottomShadow]
                  : [styles.glasgowCard, globalStyles.bottomShadow]
              }
              onPress={() => setSelectedVerbalResponse("Incomprehensible Sounds")}
            >
              <Text
                style={
                  selectedVerbalResponse === "Incomprehensible Sounds"
                    ? styles.selectedGlasgowCardText
                    : styles.glasgowCardText
                }
              >
                Incomprehensible Sounds
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                selectedVerbalResponse === "Unresponsive"
                  ? [styles.selectedGlasgowCard, globalStyles.bottomShadow]
                  : [styles.glasgowCard, globalStyles.bottomShadow]
              }
              onPress={() => setSelectedVerbalResponse("Unresponsive")}
            >
              <Text
                style={
                  selectedVerbalResponse === "Unresponsive"
                    ? styles.selectedGlasgowCardText
                    : styles.glasgowCardText
                }
              >
                Unresponsive
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.glasgowBanner}>
            <Text style={styles.glasgowBannerText}>Best Motor Response</Text>
        </View>
        <View style={styles.scrollViewHeight}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.scrollViewContainer}
          >
            <TouchableOpacity
              style={
                selectedVerbalResponse === "Oriented"
                  ? [styles.selectedGlasgowCard, globalStyles.bottomShadow]
                  : [styles.glasgowCard, globalStyles.bottomShadow]
              }
              onPress={() => setSelectedVerbalResponse("Oriented")}
            >
              <Text
                style={
                  selectedVerbalResponse === "Oriented"
                    ? styles.selectedGlasgowCardText
                    : styles.glasgowCardText
                }
              >
                Oriented
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                selectedVerbalResponse === "Confused"
                  ? [styles.selectedGlasgowCard, globalStyles.bottomShadow]
                  : [styles.glasgowCard, globalStyles.bottomShadow]
              }
              onPress={() => setSelectedVerbalResponse("Confused")}
            >
              <Text
                style={
                  selectedVerbalResponse === "Confused"
                    ? styles.selectedGlasgowCardText
                    : styles.glasgowCardText
                }
              >
                Confused
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                selectedVerbalResponse === "Innapropiate Words"
                  ? [styles.selectedGlasgowCard, globalStyles.bottomShadow]
                  : [styles.glasgowCard, globalStyles.bottomShadow]
              }
              onPress={() => setSelectedVerbalResponse("Innapropiate Words")}
            >
              <Text
                style={
                  selectedVerbalResponse === "Innapropiate Words"
                    ? styles.selectedGlasgowCardText
                    : styles.glasgowCardText
                }
              >
                Innapropiate Words
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                selectedVerbalResponse === "Incomprehensible Sounds"
                  ? [styles.selectedGlasgowCard, globalStyles.bottomShadow]
                  : [styles.glasgowCard, globalStyles.bottomShadow]
              }
              onPress={() => setSelectedVerbalResponse("Incomprehensible Sounds")}
            >
              <Text
                style={
                  selectedVerbalResponse === "Incomprehensible Sounds"
                    ? styles.selectedGlasgowCardText
                    : styles.glasgowCardText
                }
              >
                Incomprehensible Sounds
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                selectedVerbalResponse === "Unresponsive"
                  ? [styles.selectedGlasgowCard, globalStyles.bottomShadow]
                  : [styles.glasgowCard, globalStyles.bottomShadow]
              }
              onPress={() => setSelectedVerbalResponse("Unresponsive")}
            >
              <Text
                style={
                  selectedVerbalResponse === "Unresponsive"
                    ? styles.selectedGlasgowCardText
                    : styles.glasgowCardText
                }
              >
                Unresponsive
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
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
    color: "#DD41E0",
    fontWeight: "bold",
  },
  scrollViewContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  glasgowCard: {
    width: 150,
    height: 60,
    backgroundColor: "#EDEDED",
    margin: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedGlasgowCard: {
    width: 150,
    height: 60,
    backgroundColor: "#FAA7F6",
    margin: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  glasgowCardText: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    textAlign: 'center'
  },
  selectedGlasgowCardText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: 'center'

  },
  scrollViewHeight: {
    height: "12%",
  },
});
