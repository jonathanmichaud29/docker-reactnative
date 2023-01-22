import { StyleSheet, View } from "react-native";
import { Surface, Text, TextInput, Button, HelperText } from "react-native-paper";
import { useForm, Controller, SubmitHandler, FormProvider } from "react-hook-form";

import { DrawerNavLoginProps } from "../datas/navTypes";
import { makeUserSignIn, makeUserSignUp } from '../datas/firebaseConfig'

import FormTextInput from '../components/form/FormTextInput'



const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", marginHorizontal: 30 },
  input: { marginVertical: 5 },
});


type FormValues = {
  password: string;
  email: string;
};
const ERROR_MESSAGES = {
  REQUIRED: "This Field Is Required",
  EMAIL_INVALID: "Not a Valid Email",
}

export default function LoginScreen(props: DrawerNavLoginProps) {

  const { navigation } = props;

  const methods = useForm<FormValues>({
    mode: "onChange",
  })
  const { formState, handleSubmit } = methods;
  const onSubmit: SubmitHandler<FormValues> = data => console.log(data);

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Login Area</Text>
      <FormProvider {...methods}>
        <FormTextInput
          label={`Email`}
          controllerName={`email`}
          isRequired={true}
          pattern="email"
        />
        <FormTextInput
          label={`Password`}
          type="password"
          controllerName={`password`}
          isRequired={true}
        />
        <Button 
          mode="contained" 
          onPress={handleSubmit(onSubmit)}
          disabled={!formState.isValid}
        >Submit</Button>
      </FormProvider>
      
    </View>
  )
}
