import { StyleSheet } from "react-native";

export const authStyles = StyleSheet.create({
  linearGradient: {
    width: "100%",
    height: "100%",
  },
  signupButton: {
    marginTop: 20,
    borderRadius: 5,
    height: 40,
    width: 80,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    shadowColor: "rgba(46, 229, 157, 0.7)",
    shadowOpacity: 1.5,
    elevation: 8,
    shadowRadius: 20,
    shadowOffset: { width: 1, height: 13 },
    backgroundColor: "#BB22B5",
    color: "#FFFFFF",
    alignSelf: "center",
  },
  loginButton: {
    marginTop: 20,
    borderRadius: 5,
    height: 40,
    width: 60,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: "rgba(46, 229, 157, 0.7)",
    shadowOpacity: 1.5,
    elevation: 8,
    shadowRadius: 20,
    shadowOffset: { width: 1, height: 13 },
    backgroundColor: "#BB22B5",
    color: "#FFFFFF",
    alignSelf: "center",
  },
  authError: {
    alignSelf: "center",
    textAlign: "center",
    color: "red",
    fontWeight: "bold",
    marginTop: 10,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    marginBottom: 18,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
  },
  container: {
    width: "80%",
    maxWidth: 400,
    padding: 12,
    margin: 12,
  },
  prompt: {
    alignItems: "center",
  },
  promptMessage: {
    marginTop: 10,
    fontSize: 16,
    color: "#000000",
  },
  promptButton: {
    marginTop: 5,
    fontSize: 16,
    color: "#BB22B5",
  },
  screenlogo: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  logoWrapper: {
    bottom: 50,
  },
  fontLogo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#BB22B5",
  },
  sloganFont: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginTop: 30,
  },
});
