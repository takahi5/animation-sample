import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { MotiView } from "moti";
import React from "react";
import { StyleSheet, View } from "react-native";

import { RootStackParamList } from "../types/navigation";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "MotiTutorial">;
};

export const MotiTutorial: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <MotiView
        from={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1.5 }}
        transition={{
          type: "timing",
          duration: 3000,
          scale: {
            type: "spring",
            delay: 100,
          },
        }}
      >
        <View style={styles.box} />
      </MotiView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 200,
    height: 100,
    backgroundColor: "red",
  },
});
