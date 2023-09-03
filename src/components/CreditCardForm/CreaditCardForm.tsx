import React, { useRef } from "react";
import { Button, StyleSheet, TextInput, View, Text } from "react-native";
import {
  cardNumberFormatter,
  expirationDateFormatter,
} from "../../utils/formatters";
import { COLORS } from "../../theme/colors";
import FormTextField from "../FormTextField";
import cardValidator from "card-validator";
import CardIcon from "../CardIcon";
import { useFormContext } from "react-hook-form";
import { ToggleSelector } from "../ToggleSelector";

const CreditCardForm: React.FC = () => {
  const cardNumberRef = useRef<TextInput>(null);
  const expirationRef = useRef<TextInput>(null);
  const AmountRef = useRef<TextInput>(null);
  const cvvRef = useRef<TextInput>(null);

  const { watch, setValue } = useFormContext();

  const cardNumber = watch("cardNumber");
  const currency = watch("currency");

  return (
    <View style={styles.content}>
      <FormTextField
        ref={cardNumberRef}
        onValid={() => expirationRef.current?.focus()}
        placeholder="_ _ _ _  _ _ _ _  _ _ _ _  _ _ _ _"
        style={styles.textField}
        name="cardNumber"
        label="Card Number"
        keyboardType="number-pad"
        formatter={cardNumberFormatter}
        endEnhancer={<CardIcon cardNumber={cardNumber} />}
        rules={{
          required: "Card number is required.",
          validate: {
            isValid: (value: string) => {
              return (
                cardValidator.number(value).isValid ||
                "This card number looks invalid."
              );
            },
          },
        }}
      />
      <View style={styles.row}>
        <FormTextField
          ref={expirationRef}
          keyboardType="number-pad"
          onValid={() => expirationRef.current?.focus()}
          placeholder="_ _ /_ _"
          style={[
            styles.textField,
            {
              marginRight: 24,
            },
          ]}
          name="expiration"
          label="Expiry Date"
          formatter={expirationDateFormatter}
          rules={{
            required: "Expiration date required",
            validate: {
              isValid: (value: string) => {
                return (
                  cardValidator.expirationDate(value).isValid ||
                  "Expiry Date invalid."
                );
              },
            },
          }}
        />
        <FormTextField
          ref={expirationRef}
          onValid={() => expirationRef.current?.focus()}
          placeholder="_ _ _"
          style={styles.textField}
          name="cvv"
          label="CVC/CVV"
          keyboardType="number-pad"
          secureTextEntry
          maxLength={3}
          rules={{
            required: "CVC/CVV required",
            validate: {
              isValid: (value: string) => {
                const { card } = cardValidator.number(cardNumber);
                const cvvLength = card?.type === "american-express" ? 4 : 3;
                return (
                  cardValidator.cvv(value, cvvLength).isValid ||
                  "CVC/CVV invalid"
                );
              },
            },
          }}
        />
      </View>
      <FormTextField
        ref={AmountRef}
        onValid={() => expirationRef.current?.focus()}
        placeholder="00.00"
        style={[styles.textField]}
        name="amount"
        label="Amount"
        endEnhancer={
          <ToggleSelector
            activeValue={currency === "USD"}
            onPress={() =>
              currency === "USD"
                ? setValue("currency", "EUR")
                : setValue("currency", "USD")
            }
          />
        }
        keyboardType="number-pad"
        rules={{
          required: "Amount required",
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  content: {
    gap: 5,
    flex: 1,
  },
  currencyButton: {
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

export default CreditCardForm;
