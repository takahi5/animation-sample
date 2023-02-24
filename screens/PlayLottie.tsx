import React, { useRef, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Lottie from "lottie-react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "PlayLottie">;
};

export const PlayLottie: React.FC<Props> = ({}) => {
  const animation: React.LegacyRef<Lottie> | undefined = useRef(null);

  useEffect(() => {
    // temp ios fix begin
    // @see https://github.com/lottie-react-native/lottie-react-native/issues/832
    setTimeout(() => {
      animation.current?.play();
    }, 0);
  }, []);

  return (
    <View style={styles.container}>
      <Lottie source={require("../assets/loading.json")} ref={animation} loop />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
