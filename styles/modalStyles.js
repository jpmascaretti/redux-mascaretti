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
    padding: 10,
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: 'column',
    borderRadius: 15,
    width: '80%',
    height: '70%'
    
  },
});
