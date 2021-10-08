import { StyleSheet } from "react-native";

export const modalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    padding: 10,
    backgroundColor: "white",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    
  },
  modalMessage: {
    fontSize: 18,
  },
  modalTitle: {
    fontSize: 30,
    marginTop: 10,
    marginBottom: 20,
  },
  doseModalContent: {
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: 'column',
    borderRadius: 15,
    width: '80%',
    height: '70%'
  },
  topDrugBar: {
    width: '100%',
    height: 40,
    backgroundColor: "#BB22B5",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
    },
    topCustomDrugBar: {
      width: '100%',
      height: 40,
      backgroundColor: "#BB22B5",
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
      },
  closeIconStyleDoseModal: {
    marginRight: 10,
  },
  topDugBarText: {
    marginLeft: 10,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  doseTextContainer: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  doseTextBold: {
    fontWeight: 'bold',
    fontSize: 16
  },
  doseTextCorpus: {
    marginLeft: 5,
    fontSize: 16
  },
  doseTextDrugCorpus: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#BB22B5'
  },
  modalSeparator: {
    marginTop: 30,
    width: 315,
    height: 30,
    backgroundColor: "#BB22B5",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  modalPrepText: {
    color: 'white',
    fontSize: 16,
    fontWeight: "bold"
  },
  doseTextPrep: {
    fontSize: 16,
  },
  prepTextContainer: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
  addDrugModalContent: {
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: 'column',
    borderRadius: 15,
    width: '80%',
    height: '75%',
    marginBottom: 50
  },
  topCustomDrugBarText: {
    marginLeft: 75,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});
