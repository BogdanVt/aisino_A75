/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeIcon from "../assets/icons/home.svg";
import NotificationIcon from "../assets/icons/notification.svg";
import CompanyIcon from "../assets/icons/company.svg";
import PaymentIcon from "../assets/icons/pay.svg";
import { COLORS } from "../theme/colors";

import {
  CompanyScreen,
  HomeScreen,
  NotificationsScreen,
  PaymentMethodScreen,
} from "../screens";

const ROUTES = {
  home: "HomeScreen",
  company: "CompanyScreen",
  notifications: "NotificationsScreen",
  pay: "PaymentMethodScreen",
};

export type BottomTabParamList = {
  HomeScreen: undefined;
  CompanyScreen: undefined;
  NotificationsScreen: undefined;
  PaymentMethodScreen: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabsNavigatior() {
  return (
    <Tab.Navigator
      initialRouteName={"HomeScreen"}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: COLORS.blueMedium,
        headerShown: false,

        tabBarStyle: {
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
          elevation: 0,
          height: 50,
          paddingTop: 5,
          paddingBottom: 5,
          backgroundColor: COLORS.white,
          position: "absolute",
          borderTopWidth: 0,
        },
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused, size }) => {
          let iconColor = focused ? COLORS.blueMedium : COLORS.blackPrimary;

          if (route.name === ROUTES.home) {
            return <HomeIcon color={iconColor} width={20} height={20} />;
          } else if (route.name === ROUTES.notifications) {
            return (
              <NotificationIcon color={iconColor} width={20} height={20} />
            );
          } else if (route.name === ROUTES.company) {
            return <CompanyIcon color={iconColor} width={20} height={20} />;
          } else if (route.name === ROUTES.pay) {
            return <PaymentIcon color={iconColor} width={20} height={20} />;
          }
        },
      })}
    >
      <Tab.Screen
        options={{
          title: "Home",
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          title: "Notifications",
        }}
        name="NotificationsScreen"
        component={NotificationsScreen}
      />
      <Tab.Screen
        options={{
          title: "Company",
        }}
        name="CompanyScreen"
        component={CompanyScreen}
      />
      <Tab.Screen
        options={{
          title: "Pay",
        }}
        name="PaymentMethodScreen"
        component={PaymentMethodScreen}
      />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigatior;
