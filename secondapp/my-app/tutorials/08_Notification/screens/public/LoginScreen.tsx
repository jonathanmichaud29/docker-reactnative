import React, { useState } from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-paper";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

import { DrawerNavLoginProps } from "../../datas/navTypes";
import { styles } from "../../datas/styles";

import { IFirebaseResponse, makeUserSignIn } from '../../api/firebase'

import FormTextInput from '../../components/form/FormTextInput'
import FormError from '../../components/message/FormError'



type FormValues = {
  password: string;
  email: string;
};

export default function LoginScreen(props: DrawerNavLoginProps) {
  
  const { navigation } = props;

  const [apiError, changeApiError] = useState("");

  const navigateToForgetPassword = () => {
    navigation.navigate("ForgetPassword");
  }
  const navigateToSignup = () => {
    navigation.navigate("Signup");
  }
  
  const resetFormState = () => {
    changeApiError("");
  }

  const methods = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    }
  })
  const { formState, handleSubmit } = methods;
  const onSubmit: SubmitHandler<FormValues> = data => {

    resetFormState();
    
    makeUserSignIn(data.email, data.password)
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
      
      <FormError 
        message={apiError}
      />
      <View style={styles.rowCenterAround}>
        <Button
          mode="text"
          onPress={navigateToForgetPassword}
        >Forget Password?</Button>
        <Button
          mode="text"
          onPress={navigateToSignup}
        >Sign up!</Button>
      </View>

    </View>
  )
}
