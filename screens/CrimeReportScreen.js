import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import AppText from "../components/AppText";

import {
  AppForm,
  AppFormPicker as Picker,
  AppFormField as FormField,
  SubmitButton
} from "../components/form";
import Screen from "../components/Screen";
import FormImagePicker from "../components/form/FormImagePicker";

const countries = [
  { name: "Nigeria", value: "Nigeria" },
  { name: "Ghana", value: "Ghana" },
  { name: "England", value: "England" },
  { name: "South Africa", value: "South Africa" },
  { name: "Ivory Coast", value: "Ivory Coast" }
];
const crimes = [
  { name: "Rape", value: "Rape" },
  { name: "Child Abuse", value: "Child Abuse" },
  { name: "Women Abuse", value: "Women Abuse" },
  { name: "Human Trafficking", value: "Human Trafficking" },
  { name: "Smuggling", value: "Smuggling" }
];

const CrimeReportScreen = () => {
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <AppForm
          initialValues={{
            crime: null,
            state: "",
            address: "",
            country: null,
            images: [],
            text: ""
          }}
          onSubmit={values => console.log(values)}
          //   validationSchema={validationSchema}
        >
          <FormImagePicker name="images" />

          <Picker
            name="crime"
            items={crimes}
            icon="apps"
            placeholder="Crime Type"
            // PickerItemComponent={FlaggedPickerItem}
            width="70%"
          />

          <Picker
            name="country"
            items={countries}
            icon="flag"
            placeholder="Country"
            // PickerItemComponent={FlaggedPickerItem}
            width="65%"
          />

          <FormField
            name="state"
            icon="navigation"
            placeholder="State"
            autoCorret={false}
            width="80%"
          />

          <FormField
            name="address"
            placeholder="Address"
            icon="location-enter"
            autoCorret={false}
            autoCapitalize="none"
          />
          <FormField
            name="text"
            placeholder="Note (Optional)"
            icon="book"
            autoCorret={false}
            autoCapitalize="none"
            multiline
            numberOfLines={3}
          />

          <SubmitButton title="Report" color="primary" textColor="white" />
        </AppForm>
      </ScrollView>
    </Screen>
  );
};

export default CrimeReportScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});
