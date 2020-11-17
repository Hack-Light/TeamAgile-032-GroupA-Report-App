import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import COLORS from "../constants/Theme";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

const AppPicker = ({
  icon,
  placeholder,
  items,
  PickerItemComponent = PickerItem,
  onSelectItem,
  selectedItem,
  width = "100%",
  ...otherProps
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width: width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={COLORS.PRIMARY}
              style={styles.icon}
            />
          )}

          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.name}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={COLORS.PRIMARY}
          />
        </View>
      </TouchableWithoutFeedback>
      <Screen>
        <Modal visible={modalVisible} animationType="slide">
          <Button title="Close" onPress={() => setModalVisible(false)}></Button>
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                label={`${item.name} (${item.value})`}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Modal>
      </Screen>
    </>
  );
};

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.LIGHT,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginTop: 10,
    alignItems: "center"
  },
  text: {
    flex: 1,
    color: COLORS.DARK
  },

  icon: {
    marginRight: 15
  },
  textInput: {
    color: COLORS.DARK,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
  },
  placeholder: {
    flex: 1,
    color: COLORS.MUTED
  }
});
