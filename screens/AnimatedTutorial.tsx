import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Animated,
  Button,
  ScrollView,
  Easing,
} from "react-native";

import { RootStackParamList } from "../types/navigation";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "AnimatedTutorial">;
};

export const AnimatedTutorial: React.FC<Props> = () => {
  const animatedOpacityValue = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const animatedXValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedOpacityValue, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [animatedOpacityValue]);

  const onPressFadeOut = () => {
    Animated.timing(animatedOpacityValue, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const onPressFadeIn = () => {
    Animated.timing(animatedOpacityValue, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };

  const onPressMove = () => {
    Animated.timing(animatedXValue, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
      // easing: Easing.bounce,
      // easing: Easing.back(2),
      // easing: Easing.elastic(2),
    }).start();
  };

  const onPressReset = () => {
    animatedXValue.setValue(0);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Animated.View // Special animatable View
          style={{
            opacity: animatedOpacityValue, // Bind opacity to animated value
          }}
        >
          <View style={{ width: 100, height: 100, backgroundColor: "red" }} />
        </Animated.View>
        <Button title="Fade out" onPress={onPressFadeOut} />
        <Button title="Fade in" onPress={onPressFadeIn} />
        <View style={styles.spacer} />
        <Animated.View // Special animatable View
          style={{
            transform: [
              {
                translateX: animatedXValue,
              },
            ],
          }}
        >
          <View style={{ width: 100, height: 100, backgroundColor: "green" }} />
        </Animated.View>
        <Button title="Move" onPress={onPressMove} />
        <Button title="Reset" onPress={onPressReset} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  spacer: {
    height: 60,
  },
});
