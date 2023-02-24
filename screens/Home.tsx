import React from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { RootStackParamList } from "../types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Uploader">;
};

export const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lottie</Text>
      <Button
        title="Play Lottie"
        onPress={() => navigation.navigate("PlayLottie")}
      />
      <Button
        title="Control Lottie"
        onPress={() => navigation.navigate("ControlLottie")}
      />
      <Button title="Loading" onPress={() => navigation.navigate("Loading")} />
      <Button
        title="Uploader"
        onPress={() => navigation.navigate("Uploader")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
    color: "grey",
  },
});
