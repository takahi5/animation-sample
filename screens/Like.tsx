import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Lottie from "lottie-react-native";
import React, { useRef, useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { RootStackParamList } from "../types/navigation";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Like">;
};

export const Like: React.FC<Props> = () => {
  const animation: React.LegacyRef<Lottie> | undefined = useRef(null);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    // temp ios fix begin
    // @see https://github.com/lottie-react-native/lottie-react-native/issues/832
    setTimeout(() => {
      animation.current?.play(0, 1);
    }, 0);
  };

  const like = () => {
    // temp ios fix begin
    // @see https://github.com/lottie-react-native/lottie-react-native/issues/832
    setTimeout(() => {
      animation.current?.play(0, 19);
    }, 0);
  };

  const onPressLike = () => {
    if (isLiked) {
      init();
      setIsLiked(false);
    } else {
      like();
      setIsLiked(true);
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onPressLike} style={{ width: 200, height: 200 }}>
        <Lottie
          source={require("../assets/like.json")}
          ref={animation}
          loop={false}
        />
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
