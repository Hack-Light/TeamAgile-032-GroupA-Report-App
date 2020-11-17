import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/form";
import AppFormPicker from "../components/form/AppFormPicker";

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

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image source={require("../assets/imgs/logo.png")} style={styles.logo} />
      <AppForm
        initialValues={{ number: "", password: "", country: null }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormPicker
          name="country"
          items={countries}
          icon="flag"
          placeholder="Country"
          width="70%"
        />
        <AppFormField
          placeholder="Phone number"
          icon="phone"
          name="number"
          keyboardType="numeric"
          autoCorrect={false}
        />

        <AppFormField
          autoCapitalize="none"
          name="password"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textConentType="password"
        />
        <SubmitButton title="Login" color="primary" textColor="white" />
      </AppForm>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { padding: 10 },
  logo: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20
  }
});
