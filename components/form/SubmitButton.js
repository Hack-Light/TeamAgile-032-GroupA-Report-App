import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AppButton from "../AppButton";

const SubmitButton = ({ title, ...otherProps }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      title={title}
      onPress={handleSubmit}
      color="primary"
      textColor="white"
      {...otherProps}
    />
  );
};

export default SubmitButton;

const styles = StyleSheet.create({});
