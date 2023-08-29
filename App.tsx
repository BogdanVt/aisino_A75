import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationNativeStack } from "./src/navigation/NavigationNativeStack";
import { StatusBar } from "react-native";

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar
            animated={true}
            barStyle={"dark-content"}
            backgroundColor="transparent"
            translucent={true}
          />
          <NavigationNativeStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
