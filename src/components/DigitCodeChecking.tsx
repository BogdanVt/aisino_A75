import { FC, useState } from "react";
import { StyleSheet, Text } from "react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { COLORS } from "../theme/colors";

interface DigitCodeCheckingProps {}

const CELL_COUNT = 6;

export const DigitCodeChecking: FC<DigitCodeCheckingProps> = ({}) => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <CodeField
      ref={ref}
      {...props}
      value={value}
      onChangeText={setValue}
      cellCount={CELL_COUNT}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => {
        const hasValue = Boolean(symbol);
        return (
          <Text
            key={index}
            style={[
              styles.cell,
              isFocused && styles.focusCell,
              hasValue && styles.notEmptyValue,
            ]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  codeFieldRoot: { marginTop: 5 },
  cell: {
    width: 40,
    height: 50,
    lineHeight: 45,
    fontSize: 24,
    color: COLORS.blackLighten,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    textAlign: "center",
  },
  notEmptyValue: {
    borderWidth: 1,
  },
  focusCell: {
    borderColor: COLORS.black,
    borderWidth: 1,
  },
});
