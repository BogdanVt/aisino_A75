import { FC } from "react";

import { COLORS } from "../../theme/colors";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import ErrorImage from "../../assets/error.png";

const PaymentStatusScreen = ({ navigation }: { navigation: any }) => {
  const handlePress = () => navigation.navigate("HomeScreen");

  return (
    <View style={styles.container}>
      <View>
        <Image source={ErrorImage} style={styles.image} />
        <View style={styles.mainTextContainer}>
          <Text style={styles.mainText}>Transaction processing gateway</Text>
          <Text style={styles.errorText}>Connection error</Text>
        </View>
        <Text style={styles.descText}>Your payment has been declined</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.whiteText}>Back to home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blueLight,
    paddingHorizontal: 20,
    paddingVertical: 20,
    flex: 1,
    flexGrow: 1,
    justifyContent: "space-between",
    // justifyContent: "center",
  },
  mainTextContainer: {
    marginBottom: 15,
  },
  image: {
    alignSelf: "center",
    width: 250,
    height: 250,
  },
  mainText: {
    color: COLORS.black,
    fontFamily: "Geologica_Auto-Regular",
    fontSize: 32,
    textAlign: "center",
  },
  errorText: {
    color: COLORS.error,
    fontFamily: "Geologica_Auto-Regular",
    textAlign: "center",
    fontSize: 30,
    lineHeight: 35,
  },
  descText: {
    color: COLORS.black,
    fontFamily: "Geologica_Auto-Regular",
    fontSize: 18,
    textAlign: "center",
  },
  button: {
    backgroundColor: COLORS.blueMedium,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  whiteText: {
    fontFamily: "Geologica_Auto-Regular",
    color: COLORS.white,
  },
});

export default PaymentStatusScreen;
