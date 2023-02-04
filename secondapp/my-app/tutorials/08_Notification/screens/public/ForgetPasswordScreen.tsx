import React, { useState } from "react";
import { View } from "react-native";
import { Text, Surface, Button } from "react-native-paper";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

import { DrawerNavForgetPasswordProps } from "../../datas/navTypes";
import { styles } from "../../datas/styles";

import { IFirebaseResponse, makeUserForgetPassword } from '../../api/firebase'

import FormTextInput from '../../components/form/FormTextInput'
import FormError from '../../components/message/FormError'



type FormValues = {
  email: string;
};

export default function ForgetPasswordScreen(props: DrawerNavForgetPasswordProps) {
  
  const { navigation } = props;

  const [apiError, changeApiError] = useState("");

  const navigateToLogin = () => {
    navigation.navigate("Login");
  }
  
  const resetFormState = () => {
    changeApiError("");
  }

  const methods = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      email: "jonathan.michaud29@gmail.com",
    }
  })
  const { formState, handleSubmit } = methods;
  const onSubmit: SubmitHandler<FormValues> = data => {

    resetFormState();
    
    makeUserForgetPassword(data.email)
      .then(({data}:IFirebaseResponse) => {
        
      })
      .catch(({message}: IFirebaseResponse) => {
        changeApiError(message);
      })
      .then(() =>{
        
      });
  }

  return (
    <View style={styles.mainContainer}>
      <Text variant="titleLarge">Reset your password</Text>
      <FormProvider {...methods}>
        <FormTextInput
          label={`Email`}
          controllerName={`email`}
          isRequired={true}
          pattern="email"
        />
        <Button 
          mode="contained" 
          onPress={handleSubmit(onSubmit)}
          disabled={!formState.isValid}
        >Reset Password</Button>
      </FormProvider>
      
      <FormError 
        message={apiError}
      />
      <Button
        mode="text"
        onPress={navigateToLogin}
      >Sign in</Button>

    </View>
  )
}
