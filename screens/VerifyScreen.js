import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/form";
import AppText from "../components/AppText";
import COLORS from "../constants/Theme";

const validationSchema = Yup.object().shape({
  code: Yup.string().min(6).max(6).required().label("OTP Code")
});

const VerifyScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/imgs/logo.png")} />
      <AppForm
        initialValues={{ code: "" }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppText style={styles.text}>
          Check your message box for a 6-digit verification code
        </AppText>
        <AppFormField
          name="code"
          placeholder="OTP Code"
          icon="access-point"
          keyboardType="numeric"
          autoCorret={false}
          autoCapitalize="none"
        />
        <SubmitButton title="Verify" color="primary" textColor="white" />
      </AppForm>
    </Screen>
  );
};

export default VerifyScreen;

const styles = StyleSheet.create({
  text: {
    padding: 20,
    color: "tomato"
  },
  container: { padding: 10 },
  logo: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20
  }
});
