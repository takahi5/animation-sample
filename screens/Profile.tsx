import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BlurView } from "expo-blur";
import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  Image,
  Animated,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { RootStackParamList } from "../types/navigation";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Profile">;
};

const MAX_HEADER_HEIGHT = 150;
const MIN_HEADER_HEIGHT = 80;
const MAX_AVATAR_SIZE = 100;
const AVATAR_TOP = MAX_HEADER_HEIGHT - MAX_AVATAR_SIZE / 2;

export const Profile: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ height: MAX_HEADER_HEIGHT * 1.5 }} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
        <View style={styles.item} />
      </ScrollView>
      <View
        style={[
          styles.headerImage,
          // TODO: ヘッダー画像をアニメーションさせる
          {
            height: MAX_HEADER_HEIGHT,
            zIndex: 0,
          },
        ]}
      >
        <Image
          source={require("../assets/cover.jpg")}
          style={styles.cover}
          resizeMethod="auto"
        />
      </View>
      <Image
        source={require("../assets/avatar.jpg")}
        style={[
          styles.avatar,
          // TODO: アバター画像をアニメーションさせる
          {
            width: MAX_AVATAR_SIZE,
            height: MAX_AVATAR_SIZE,
            top: AVATAR_TOP,
            zIndex: 1,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    height: 100,
    margin: 10,
    backgroundColor: "#ccc",
  },
  cover: {
    flex: 1,
    width: "100%",
  },
  headerImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    backgroundColor: "red",
  },
  avatar: {
    position: "absolute",
    top: AVATAR_TOP,
    left: 20,
    borderRadius: 50,
    backgroundColor: "#000",
    borderWidth: 5,
    borderColor: "#fff",
  },
  blur: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: MIN_HEADER_HEIGHT,
    zIndex: 2,
  },
  backButton: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    left: 10,
    top: 35,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: 36,
    height: 36,
    borderRadius: 18,
    zIndex: 3,
  },
});