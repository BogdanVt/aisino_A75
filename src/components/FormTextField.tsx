import React, { useEffect } from "react";
import { useFormContext, Controller, RegisterOptions } from "react-hook-form";
import TextField from "./TextField";
import { TextInput } from "react-native";

type Props = React.ComponentProps<typeof TextField> & {
  name: string;
  rules: RegisterOptions;
  validationLength?: number;
  formatter?: any;
  onValid: any;
  endEnhancer?: React.ReactNode;
};
const FormTextField = React.forwardRef<TextInput, Props>((props, ref) => {
  const {
    name,
    rules,
    validationLength = 1,
    formatter,
    onValid,
    ...restOfProps
  } = props;
  const { control, trigger, watch } = useFormContext();

  const value = watch(name);

  useEffect(() => {
    if (value.length >= validationLength) {
      trigger(name);
    }
  }, [value, name, validationLength, trigger]);

  useEffect(() => {
    async function validate() {
      const isValid = await trigger(name);
      if (isValid) onValid?.();
    }
    if (value.length >= validationLength) {
      trigger(name);
      validate();
    }
  }, [value, name, validationLength, trigger]);

  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field, formState }) => {
        return (
          <TextField
            {...restOfProps}
            ref={ref}
            errorText={formState.errors[name]?.message}
            onBlur={field.onBlur}
            onChangeText={(text) => {
              const newValue = formatter ? formatter(value, text) : text;
              field.onChange(newValue);
            }}
            value={field.value}
          />
        );
      }}
      name={name}
    />
  );
});
export default FormTextField;
