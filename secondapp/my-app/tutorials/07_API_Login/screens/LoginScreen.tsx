import { useState } from "react";
import { View } from "react-native";
import { Text, Surface, Button } from "react-native-paper";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";

import { DrawerNavLoginProps } from "../datas/navTypes";
import { styles } from "../datas/styles";

import { EUserLogin, makeUserSignIn } from '../api/firebase'

import FormTextInput from '../components/form/FormTextInput'
import FormError from '../components/message/FormError'



type FormValues = {
  password: string;
  email: string;
};

export default function LoginScreen(props: DrawerNavLoginProps) {
  
  const { navigation } = props;

  const [apiError, changeApiError] = useState("");
  
  const resetFormState = () => {
    changeApiError("");
  }

  const methods = useForm<FormValues>({
    mode: "onChange",
    defaultValues: {
      email: "jonathan.michaud29@gmail.com",
      password: "666laCour36",
    }
  })
  const { formState, handleSubmit } = methods;
  const onSubmit: SubmitHandler<FormValues> = data => {

    resetFormState();
    
    makeUserSignIn(data.email, data.password)
      .then((userCredential) => {
        changeApiError("");
      })
      .catch((error: EUserLogin) => {
        changeApiError(error.message);
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

    </View>
  )
}
