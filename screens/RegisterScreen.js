import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton
} from "../components/form";
import FlaggedPickerItem from "../components/FlaggedPickerItem";

const countries = [
  { name: "Nigeria", value: 234 },
  { name: "Ghana", value: 235 },
  { name: "England", value: 441 },
  { name: "South Africa", value: 200 },
  { name: "Ivory Coast", value: 144 }
];

const validationSchema = Yup.object().shape({
  number: Yup.number().min(10, "Too Short").required().label("Number"),
  password: Yup.string().min(6).required().label("Password"),
  country: Yup.object().required().nullable().label("Country")
});

const RegisterScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/imgs/logo.png")} />
      <AppForm
        initialValues={{ number: "", password: "", country: null }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <Picker
          name="country"
          items={countries}
          icon="flag"
          placeholder="Country"
          // PickerItemComponent={FlaggedPickerItem}
          width="70%"
        />

        <FormField
          name="number"
          icon="phone"
          placeholder="Phone Number"
          autoCorret={false}
          keyboardType="numeric"
        />

        <FormField
          name="password"
          placeholder="Password"
          icon="lock"
          secureTextEntry
          autoCorret={false}
          autoCapitalize="none"
          tetContentType="password"
        />
        <SubmitButton title="Register" color="primary" textColor="white" />
      </AppForm>
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: { padding: 10 },
  logo: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20
  }
});
