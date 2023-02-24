import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screens/Home";
import { PlayLottie } from "./screens/PlayLottie";
import { ControlLottie } from "./screens/ControlLottie";
import { Loading } from "./screens/Loading";
import { Like } from "./screens/Like";
import { Uploader } from "./screens/Uploader";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
