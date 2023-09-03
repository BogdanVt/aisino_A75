import { FC } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";

interface ToggleSelectorProps {
  activeValue: boolean;
  onPress: () => void;
}

export const ToggleSelector: FC<ToggleSelectorProps> = ({
  activeValue,
  onPress,
}) => {
  return (
    <View style={styles.content}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.currencyButton, activeValue && styles.activeButton]}
      >
        <Text style={[styles.text, activeValue && styles.activeText]}>USD</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.currencyButton, !activeValue && styles.activeButton]}
      >
        <Text style={[styles.text, !activeValue && styles.activeText]}>
          EUR
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    minHeight: 45,
    gap: 5,
  },
  currencyButton: {
    minWidth: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.blueLight,
    padding: 5,
    borderRadius: 5,
  },
  activeButton: {
    backgroundColor: COLORS.blueMedium,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  text: {
    fontFamily: "Geologica_Auto-Regular",
    color: COLORS.black,
  },
  activeText: {
    color: COLORS.white,
  },
  textField: {
    flex: 1,
    borderRadius: 10,
  },
});
