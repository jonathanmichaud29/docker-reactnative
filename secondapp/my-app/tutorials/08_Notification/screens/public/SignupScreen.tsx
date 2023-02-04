import React, { useState } from "react";
import { View } from "react-native";
import { Text, Surface, Button } from "react-native-paper";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

import { DrawerNavSignupProps } from "../../datas/navTypes";
import { styles } from "../../datas/styles";

import { IFirebaseResponse, makeUserSignUp } from '../../api/firebase'

import FormTextInput from '../../components/form/FormTextInput'
import FormError from '../../components/message/FormError'



type FormValues = {
  password: string;
  email: string;
};

export default function SignupScreen(props: DrawerNavSignupProps) {
  
  const { navigation } = props;

  const [apiError, changeApiError] = useState("");

  
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
    
    makeUserSignUp(data.email, data.password)
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
      <Text variant="titleLarge">Signup Area</Text>
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

    </View>
  )
}
