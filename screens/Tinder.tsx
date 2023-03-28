import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useRef } from "react";
import { StyleSheet, View, Animated, PanResponder } from "react-native";

import { RootStackParamList } from "../types/navigation";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Tinder">;
};

export const Tinder: React.FC<Props> = () => {
  const animatedPan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: animatedPan.x, dy: animatedPan.y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        animatedPan.extractOffset();
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [
            { translateX: animatedPan.x },
            { translateY: animatedPan.y },
          ],
        }}
        {...panResponder.panHandlers}
      >
        <View style={styles.box} />
      </Animated.View>
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
    height: 250,
    width: 200,
    backgroundColor: "#1DE9B6",
    borderRadius: 5,
  },
});
