import React from "react";
import RecordsTab from "../../BottomTabs/RecordsTab";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { bottomNavStyles } from "../../../styles/bottomNavStyles";
import { globalStyles } from "../../../styles/globalStyles";
import DefaultHeader from "../../DefaultHeader/DefaultHeader";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native";
import { getRecords } from "../../../store/actions/records.actions";


export default function IndividualRecord({ route }) {
  const { individualRecord, patientGender, patientName } = route.params;
  const navigation = useNavigation();

  return (
    <View style={globalStyles.safeAreaView}>
      <DefaultHeader />
      <TouchableOpacity
        style={globalStyles.backToRecords}
        onPress={() => {
          navigation.navigate("Archive", {
            patientName: patientName,
            patientGender: patientGender,
          });
        }}
      >
        <AntDesign name="arrowleft" size={24} color="#C4C4C4" />
        <Text style={globalStyles.btrText}>Back to Archive</Text>
      </TouchableOpacity>

      <View style={styles.recordBannerBox}>
        <View
          style={
            patientGender === "male"
              ? styles.upperBanner
              : styles.upperBannerFemale
          }
        >
          {patientGender == "male" ? (
            <Ionicons
              style={styles.genderIcon}
              name="md-male"
              size={30}
              color="white"
            />
          ) : (
            <Ionicons
              style={styles.genderIcon}
              name="md-female"
              size={30}
              color="white"
            />
          )}
          <Text style={styles.patientRecordBannerText}>{patientName}</Text>
        </View>
        <View style={styles.displayBox}>
            <View style={styles.recordDisplay}>
            <Text style={styles.recordText}>Date: </Text>
            {individualRecord.recordDate && <Text style={styles.recordTextInfo}>{individualRecord.recordDate}</Text>}
            </View>
            <View style={styles.recordDisplay}>
            <Text style={styles.recordText}>Weight (kg): </Text>
            {individualRecord.recordWeight && <Text style={styles.recordTextInfo}>{individualRecord.recordWeight}</Text>}
            </View>
            <View style={styles.recordDisplay}>
            <Text style={styles.recordText}>Height (cm): </Text>
            {individualRecord.recordHeight && <Text style={styles.recordTextInfo}>{individualRecord.recordHeight}</Text>}
            </View>
            <View style={styles.recordDisplay}>
            <Text style={styles.recordText}>Height (cm): </Text>
            {individualRecord.recordHeight && <Text style={styles.recordTextInfo}>{individualRecord.recordHeight}</Text>}
            </View>
            <View style={styles.recordDisplay}>
            <Text style={styles.recordText}>Dose: </Text>
            {individualRecord.recordDose && <Text style={styles.recordTextInfo}>{individualRecord.recordDose}</Text>}
            </View>
            <View style={styles.recordDisplay}>
            <Text style={styles.recordText}>Glasgow: </Text>
            {individualRecord.recordGlasgow && <Text style={styles.recordTextInfo}>{individualRecord.recordGlasgow}</Text>}
            </View>
            <View style={styles.recordDisplay}>
            <Text style={styles.recordText}>Apgar: </Text>
            {individualRecord.recordApgar && <Text style={styles.recordTextInfo}>{individualRecord.recordApgar}</Text>}
            </View>
        </View>
        <View style={styles.observationsBox}>
            <ScrollView>
                <Text style={styles.recordText}>Observations: </Text>
                {individualRecord.recordObservations && <Text style={{fontFamily: 'pinyon-script-regular', fontSize: 26, marginLeft:0}} >{individualRecord.recordObservations}</Text>}
            </ScrollView>
        </View>
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
  recordBannerBox: {
    width: "100%",
    height: "80%",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    marginTop: 15,
  },
  upperBanner: {
    backgroundColor: "#96EAEF",
    width: "90%",
    height: 40,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  upperBannerFemale: {
    backgroundColor: "#FAA7F6",
    width: "90%",
    height: 40,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  recordBox: {
    width: "90%",
    height: "80%",
  },
  patientRecordBannerText: {
    fontSize: 16,
    color: "white",
    marginLeft: 10,
    fontWeight: "bold",
  },
  displayBox: {
    borderWidth: 1,
    borderColor: "#C4C4C4",
    width: "90%",
    height: "50%",
    borderTopWidth: 0,
    justifyContent: 'space-evenly'

  },
  observationsBox: {
    borderWidth: 1,
    borderColor: "#C4C4C4",
    width: "90%",
    height: "30%",
    borderTopWidth: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: 5
  },
  recordFolder: {
    width: 90,
    height: 60,
    borderWidth: 1,
    borderTopWidth: 8,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderColor: "#C4C4C4",
    margin: 10,
    marginRight: 0,
    marginLeft: 20,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  recordFolderText: {
    fontWeight: "bold",
    color: "#C4C4C4",
  },
  genderIcon: {
    marginLeft: 10,
  },
  folderIcon: {
    marginLeft: 180,
  },
  recordInput: {
    height: 40,
    width: "80%",
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#C4C4C4",
    padding: 10,
    borderRadius: 5,
    marginLeft: 30,
  },
  observationsInput: {
    height: 80,
    width: "80%",
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#C4C4C4",
    padding: 10,
    borderRadius: 5,
    marginLeft: 30,
    textAlignVertical: "top",
  },
  buttonContainer: {
    alignSelf: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 10,
  },
  cancelButton: {
    backgroundColor: "red",
    height: 40,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
  },
  createRecordButton: {
    backgroundColor: "#BB22B5",
    height: 40,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginLeft: 10,
    marginBottom: 10,
  },
  recordDisplay: {
      flexDirection: 'row',
      marginLeft: 5
  },
  recordText: {
      fontWeight: 'bold',
      color: '#C4C4C4',
      fontSize: 16
  },
  recordTextInfo: {
    fontSize: 16
}
});
