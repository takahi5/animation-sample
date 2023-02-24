import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Uploader } from "./screens/Uploader";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="アップロード画面サンプル" component={Uploader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
