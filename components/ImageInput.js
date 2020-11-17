import React, { useEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Alert
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import COLORS from "../constants/Theme";

const ImageInput = ({ imageUri, onChangeImage }) => {
  useEffect(() => {
    requestPermission;
  }, []);

  const requestPermission = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (!granted) alert("You need to enable permission to access library");
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert("Delete", "Are you sure you want to delete this image", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" }
      ]);
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        quality: 0.5
      });
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            name="camera"
            color={COLORS.MEDIUM}
            size={40}
          />
        )}

        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.LIGHT,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: 80,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  }
});
