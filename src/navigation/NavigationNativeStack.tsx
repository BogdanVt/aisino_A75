/* eslint-disable react/react-in-jsx-scope */
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";

import BottomTabsNavigatior from "./BottomTabNavigator";
import {
  CreditCardScreen,
  OfflineModeScreen,
  PaymentStatusScreen,
  PreAuthorizationScreen,
} from "../screens";
import { COLORS } from "../theme/colors";

export type NativeStackParamList = {
  BottomTabs: undefined;
  CreditCardScreen: undefined;
  OfflineModeScreen: undefined;
  PaymentStatusScreen: undefined;
  PreAuthorizationScreen: undefined;
};

const Stack = createNativeStackNavigator<NativeStackParamList>();

export const NavigationNativeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTabs"
      screenOptions={{
        headerShown: false,
        animation: "fade_from_bottom",
      }}
    >
      <Stack.Screen
        name="CreditCardScreen"
        component={CreditCardScreen}
        options={{
          ...options,
          headerTitle: "Top up Wallet",
        }}
      />
      <Stack.Screen
        name="OfflineModeScreen"
        component={OfflineModeScreen}
        options={{
          ...options,
          headerTitle: "Offline mode",
        }}
      />
      <Stack.Screen
        name="PreAuthorizationScreen"
        component={PreAuthorizationScreen}
        options={{
          ...options,
          headerTitle: "6-digit Pre-authorization",
        }}
      />
      <Stack.Screen
        name="PaymentStatusScreen"
        component={PaymentStatusScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="BottomTabs" component={BottomTabsNavigatior} />
    </Stack.Navigator>
  );
};

const options: NativeStackNavigationOptions = {
  headerShown: true,
  headerTitleStyle: {
    fontSize: 16,
    fontFamily: "Geologica_Auto-Medium",
  },

  headerTitleAlign: "center",
  headerTransparent: true,
};
