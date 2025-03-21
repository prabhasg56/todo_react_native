import { StyleSheet } from "react-native";

export const primaryColor = "#1f96ad";
export const lightColor = "#7ed6e7";
export const activeColor = "#1b8398";
export const buttonColor = "#177082";
export const dangerBtnColor = "#dc3545";
export const succesBtnColor = "#28a745";


const GlobalStyles = StyleSheet.create({
  fontFamilies: {
    openSansB: {
      fontFamily: "OpenSans-Bold",
    },
    openSansR: {
      fontFamily: "OpenSans-Regular",
    }
  },
  continueBtn: {
    display: "flex",
    backgroundColor: "#0D1A26",
    paddingVertical: 7,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: 100,
    alignItems: "center",
  },
  creditsMfgLogo: {
    fontWeight: 700,
    fontSize: 17,
    color: "#E7E7E7"
  },
  headline: {
    fontFamily: "Montserrat-Regular",
  },
  paragraph: {
    fontFamily: "OpenSans-Regular",
  },
  btnTxt: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: "OpenSans-Bold",
  },
  background: {
    backgroundColor: "#0D1A26",
  },
  button: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 56,
  },
  input: {
    color: "#9E9898",
    borderRadius: 10,
    height: 48,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    fontFamily: "OpenSans-Bold",
    fontSize: 16,
  },
  montHeadline: {
    fontFamily: "Montserrat-Bold",
    fontSize: 14,
    lineHeight: 22,
  },
  boldHeadline: {
    fontFamily: "OpenSans-Bold",
    fontSize: 15,
    lineHeight: 25,
  },
  smallboldHeadline: {
    fontFamily: "OpenSans-Bold",
    fontSize: 17,
    lineHeight: 19,
  },
  semiBoldHeadline: {
    fontFamily: "OpenSans-SemiBold",
    fontSize: 15,
    lineHeight: 24,
    color: "black",
  },
  normalHeadline: {
    fontFamily: "OpenSans-Regular",
    fontSize: 15,
    lineHeight: 24,
    color: "black",
  }

});

export default GlobalStyles;
