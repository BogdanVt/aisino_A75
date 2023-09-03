import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import CreditCardForm from "../../components/CreditCardForm/CreaditCardForm";
import { FormProvider, useForm } from "react-hook-form";
import { COLORS } from "../../theme/colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import LogoDB from "../../assets/logoDB.svg";
import { DigitCodeChecking } from "../../components/DigitCodeChecking";
import { sleep } from "../../utils/mockRequests";
import ModalProgress from "../../components/ModalProgress";

const windowHeight = Dimensions.get("window").height;

const SECONDS_PROGRESS = 6000;

interface FormModel {
  cardNumber: string;
  expiration: string;
  cvv: string;
  amount: string;
  currency: string;
}

const OfflineModeScreen = ({ navigation }: { navigation: any }) => {
  const formMethods = useForm<FormModel>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      cardNumber: "",
      expiration: "",
      cvv: "",
      amount: "",
      currency: "",
    },
  });

  const [modalVisible, setModalVisible] = useState(false);

  const fakeRequest = async () => {
    setModalVisible(true);
    try {
      await sleep(SECONDS_PROGRESS);
    } catch (e) {
    } finally {
      setModalVisible(false);
      navigation.navigate("PaymentStatusScreen");
    }
  };

  function onSubmit(model: FormModel) {
    Alert.alert("Success");
  }

  return (
    <>
      <KeyboardAwareScrollView
        extraScrollHeight={150}
        enableResetScrollToCoords
        scrollEnabled={false}
        keyboardOpeningTime={0}
        style={{
          backgroundColor: COLORS.blueLight,
        }}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 20,
          paddingTop: 60,
          minHeight: windowHeight,
        }}
      >
        <View style={{ flex: 1 }}>
          <View style={styles.topSection}>
            <View style={styles.header}>
              <View style={styles.headerTextContainer}>
                {/* <Text style={styles.title}>Deutsche Bank</Text>
                <DeutscheIcon width="20" height="20" /> */}
                <LogoDB width="150" height="40" />
              </View>
            </View>
            <FormProvider {...formMethods}>
              <CreditCardForm />
            </FormProvider>

            <View style={styles.digitContainer}>
              <Text style={styles.codeHeaderText}>6-digit code checking</Text>
              <DigitCodeChecking />
            </View>
          </View>

          <View style={styles.bottomSection}>
            <TouchableOpacity style={styles.submit} onPress={fakeRequest}>
              <Text style={styles.whiteText}>Payment</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
      <ModalProgress
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.blueLight,
    paddingHorizontal: 20,
    minHeight: windowHeight,
  },
  content: {
    paddingTop: 60,
  },
  topSection: {
    // flex: 1,
  },
  bottomSection: {
    flex: 1,
    justifyContent: "flex-end",
  },
  digitContainer: {
    marginTop: 10,
  },
  submit: {
    backgroundColor: COLORS.blueMedium,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  whiteText: {
    color: COLORS.white,
  },

  header: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: "center",
  },
  headerTextContainer: {
    minHeight: 20,
    flexDirection: "row",
    gap: 10,
  },
  title: {
    alignSelf: "flex-end",
    fontFamily: "Geologica_Auto-Medium",
    color: COLORS.blueMedium,
    fontSize: 16,
  },
  codeHeaderText: {
    fontFamily: "Geologica_Auto-Medium",
    color: COLORS.black,
  },
});

export default OfflineModeScreen;
