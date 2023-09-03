import React, { useState } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { TextInput, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../theme/colors";

type Props = React.ComponentProps<typeof TextInput> & {
  label: string;
  placeholder: string;
  errorText?: any;
  endEnhancer?: React.ReactNode;
};

const TextField = React.forwardRef<TextInput, Props>((props, ref) => {
  const {
    label,
    style,
    errorText,
    endEnhancer,
    placeholder,
    onBlur,
    onFocus,
    ...restOfProps
  } = props;
  const [isFocused, setIsFocused] = useState(false);

  let color = isFocused ? COLORS.bluePrimary : COLORS.white;

  if (errorText) {
    color = COLORS.error;
  }

  return (
    <View style={style}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.bluePrimary}
        style={[
          styles.input,
          {
            borderColor: color,
          },
        ]}
        onBlur={(event) => {
          setIsFocused(false);
          onBlur?.(event);
        }}
        onFocus={(event) => {
          setIsFocused(true);
          onFocus?.(event);
        }}
        {...restOfProps}
      />
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      {endEnhancer && (
        <View style={styles.enhancerContainer}>{endEnhancer}</View>
      )}
      {/* {!!errorText && <Text style={[styles.error]}>{errorText}</Text>} */}
    </View>
  );
});

const styles = StyleSheet.create({
  input: {
    padding: 20,
    borderColor: COLORS.black,
    borderWidth: 1,
    backgroundColor: COLORS.white,
    paddingBottom: 5,
    borderRadius: 10,
    fontFamily: "Geologica_Auto-Medium",
    fontSize: 16,
    color: COLORS.bluePrimary,
  },
  labelContainer: {
    position: "absolute",
    left: 20,
    top: 5,
  },
  enhancerContainer: {
    position: "absolute",
    top: 5,
    right: 16,
  },
  label: {
    fontFamily: "Geologica_Auto-Medium",
    fontSize: 12,
    color: COLORS.black,
  },
  error: {
    position: "absolute",
    bottom: -18,
    marginLeft: 12,
    fontSize: 12,
    color: COLORS.error,
    backgroundColor: COLORS.blueLight,
  },
});
export default TextField;
