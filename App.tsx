import React, { useRef, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import Lottie from "lottie-react-native";

const callFakeAPI = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 3000);
  });
};

export default function App() {
  const animation: React.LegacyRef<Lottie> | undefined = useRef(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // temp ios fix begin
    // @see https://github.com/lottie-react-native/lottie-react-native/issues/832
    setTimeout(() => {
      animation.current?.play();
    }, 0);

    // ダミーのAPIを呼ぶ
    callFakeAPI().then(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Lottie
          style={{
            width: 100,
          }}
          source={require("./assets/loading.json")}
          ref={animation}
          loop
          autoPlay
        />
      ) : (
        <View style={{ padding: 10 }}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
