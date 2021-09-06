import { StyleSheet } from "react-native";

export const bottomNavStyles = StyleSheet.create({
  NavContainerFlex: {
    position: "absolute",
    width: "100%",
    height: "97%",
    flexDirection: "column",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 4,
  },
  NavContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 0,
  },
  overlay: {
    height: 60,
    width: 60,
    backgroundColor: "#FFFFFF",
    borderTopColor: "#FFFFFF",
    borderBottomColor: "#FFFFFF",
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#96EAEF",
    margin: 0,
    padding: 0,
  },
  NavBar: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    width: "90%",
    justifyContent: "space-evenly",
    borderRadius: 40,
    borderColor: "#96EAEF",
    borderWidth: 2,
  },
  IconBehave: {
    marginTop: 2,
    padding: 14,
  },
  IconSelectedOne: {
    marginTop: 2,
    padding: 14,
    paddingLeft: 18,
  },
  IconSelectedTwo: {
    marginTop: 2,
    padding: 14,
    paddingLeft: 16,
  },
  IconSelectedThree: {
    marginTop: 2,
    padding: 14,
    paddingLeft: 16,
  },
});
