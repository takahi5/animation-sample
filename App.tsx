// import "react-native-reanimated";
// import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { ControlLottie } from "./screens/ControlLottie";
import { Home } from "./screens/Home";
import { Like } from "./screens/Like";
import { Loading } from "./screens/Loading";
import { PlayLottie } from "./screens/PlayLottie";
import { Uploader } from "./screens/Uploader";
import { MotiTutorial } from "./screens/MotiTutorial";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="PlayLottie" component={PlayLottie} />
        <Stack.Screen name="ControlLottie" component={ControlLottie} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Like" component={Like} />
        <Stack.Screen name="Uploader" component={Uploader} />
        <Stack.Screen name="MotiTutorial" component={MotiTutorial} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
