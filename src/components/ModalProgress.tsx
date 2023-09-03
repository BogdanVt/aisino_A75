import React, { FC, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  Pressable,
  View,
  ActivityIndicator,
} from "react-native";
import Modal from "react-native-modal";
import { COLORS } from "../theme/colors";
import { BlurView } from "@react-native-community/blur";

interface ModalProps {
  modalVisible: boolean;
  setModalVisible: (v: boolean) => void;
}

const ModalProgress: FC<ModalProps> = ({ modalVisible, setModalVisible }) => {
  return (
    <Modal
      // customBackdrop={
      //   <BlurView
      //     style={styles.absolute}
      //     blurType="extraDark"
      //     blurAmount={10}
      //     reducedTransparencyFallbackColor="black"
      //   />
      // }
      statusBarTranslucent
      isVisible={modalVisible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ActivityIndicator size="large" color={COLORS.blueMedium} />
          <Text style={styles.textHeader}>On progress</Text>
          <Text style={styles.textDescription}>
            Please wait, we are processing your transaction
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  textHeader: {
    fontFamily: "Geologica_Auto-Medium",
    fontSize: 24,
    color: COLORS.black,
  },
  textDescription: {
    textAlign: "center",
    fontFamily: "Geologica_Auto-Medium",
    fontSize: 12,
    color: COLORS.black,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: COLORS.black,
  },
});

export default ModalProgress;
