import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import MetalMoney from "../../assets/mentalMoney.png";
import { COLORS } from "../../theme/colors";
import { DefaultCard } from "../../components/DefaultCard/DefaultCard";

import CardIcon from "../../assets/icons/card.svg";
import GooglePayIcon from "../../assets/icons/googlepay.svg";
import OfflineIcon from "../../assets/icons/offline.svg";
import BiometricIcon from "../../assets/icons/biometric.svg";

const PayScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerSection}>
        <Image source={MetalMoney} style={styles.imageStyle} />
        <Text style={styles.textMain}>Payment method</Text>
      </View>
      <View style={styles.paymentSection}>
        <DefaultCard
          onPress={() => navigation.navigate("CreditCardScreen")}
          Icon={CardIcon}
          headerText="Credit card"
          descText="Top up instantly"
        />
        <DefaultCard
          Icon={GooglePayIcon}
          headerText="Google pay"
          descText="Top up instantly"
        />
      </View>
      <View style={styles.settingsSection}>
        <DefaultCard
          horizontal
          Icon={OfflineIcon}
          headerText="Offline mode"
          descText="You can pay offline"
        />
        <DefaultCard
          horizontal
          Icon={BiometricIcon}
          headerText="Pre-authorisation"
          descText="6-digit code checking"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blueLight,
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  headerSection: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  paymentSection: {
    flexDirection: "row",
  },
  settingsSection: {},
  imageStyle: {
    width: 150,
    height: 150,
    aspectRatio: 1,
  },
  textMain: {
    fontFamily: "Geologica_Auto-Regular",
    fontSize: 24,
    color: COLORS.black,
  },
});

export default PayScreen;
