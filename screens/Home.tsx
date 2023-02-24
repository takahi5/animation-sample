import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { RootStackParamList } from "../types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Uploader">;
};

export const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Uploader"
        onPress={() => navigation.navigate("Uploader")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
