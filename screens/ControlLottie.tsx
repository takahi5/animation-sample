import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Lottie from "lottie-react-native";
import React, { useRef } from "react";
import { StyleSheet, View, Button, SafeAreaView } from "react-native";

import { RootStackParamList } from "../types/navigation";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Uploader">;
};

export const ControlLottie: React.FC<Props> = () => {
  const animation: React.LegacyRef<Lottie> | undefined = useRef(null);

  const play = () => {
    // temp ios fix begin
    // @see https://github.com/lottie-react-native/lottie-react-native/issues/832
    setTimeout(() => {
      animation.current?.play();
    }, 0);
  };

  const pause = () => {
    setTimeout(() => {
      animation.current?.pause();
    }, 0);
  };

  const reset = () => {
    setTimeout(() => {
      animation.current?.reset();
    }, 0);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Lottie
        source={require("../assets/happy-valentines-day.json")}
        ref={animation}
        loop
      />
      <View>
        <Button onPress={play} title="Play" />
        <Button onPress={pause} title="Pause" />
        <Button onPress={reset} title="Reset" />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
