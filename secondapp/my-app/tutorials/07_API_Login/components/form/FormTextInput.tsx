import { StyleSheet } from "react-native";
import { Controller, useFormContext } from "react-hook-form";
import { TextInput, HelperText } from "react-native-paper";

import { patterns } from '../../datas/validations';

interface IFormTextInputProps {
  label: string;
  controllerName: string;
  type?: "password";
  controllerKey?: string;
  isRequired?: boolean;
  pattern?: string;
}

export default function FormTextInput(props: IFormTextInputProps) {
  const { label, controllerName, type, controllerKey, isRequired, pattern } = props;
  const { control } = useFormContext();

  let listRules = {} as any;
  if( isRequired ){
    listRules.required = "This field is required";
  }
  if( pattern && pattern in patterns ){
    listRules.pattern = patterns[pattern];
  }

  let extraInputProps = {} as any;
  if( type && type === 'password' ){
    extraInputProps.secureTextEntry=true;
  }

  return (
    <Controller
      key={controllerKey}
      name={controllerName}
      control={control}
      rules={listRules}
      render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
        <>
          <TextInput 
            label={label}
            value={value}
            onBlur={onBlur}
            {...extraInputProps}
            onChangeText={(value) => onChange(value)}
            style={styles.input}
          />
          { error && error.message && <HelperText type="error">{error.message}</HelperText> }
        </>
      )}
    />
  )
}

const styles = StyleSheet.create({
  input: { marginVertical: 5 },
});
