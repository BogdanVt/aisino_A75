/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import HomeIcon from '../assets/icons/home.svg';
import NotificationIcon from '../assets/icons/notification.svg';
import CompanyIcon from '../assets/icons/company.svg';
import PaymentIcon from '../assets/icons/pay.svg';
import {COLORS} from '../theme/colors';
import NotificationsScreen from '../screens/NotificationsScreen/NotificationsScreen';
import CompanyScreen from '../screens/CompanyScreen/CompanyScreen';
import PayScreen from '../screens/PayScreen/PayScreen';

const ROUTES = {
  home: 'Home',
  notifications: 'Notifications',
  company: 'Company',
  pay: 'Pay',
};

export type BottomTabParamList = {
  Home: undefined;
  Company: undefined;
  Notifications: undefined;
  Pay: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabsNavigatior() {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: COLORS.blueMedium,

        headerShown: false,
        tabBarStyle: {
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
          elevation: 0,
          height: 70,
          paddingHorizontal: 5,
          paddingTop: 0,
          paddingBottom: 10,
          backgroundColor: COLORS.white,
          position: 'absolute',
          borderTopWidth: 0,
        },

        tabBarHideOnKeyboard: true,
        tabBarIcon: ({focused, size}) => {
          let iconColor = focused ? COLORS.blueMedium : COLORS.blackPrimary;

          if (route.name === ROUTES.home) {
            return <HomeIcon color={iconColor} width={size} height={size} />;
          } else if (route.name === ROUTES.notifications) {
            return (
              <NotificationIcon color={iconColor} width={size} height={size} />
            );
          } else if (route.name === ROUTES.company) {
            return <CompanyIcon color={iconColor} width={size} height={size} />;
          } else if (route.name === ROUTES.pay) {
            return <PaymentIcon color={iconColor} width={size} height={size} />;
          }
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Company" component={CompanyScreen} />
      <Tab.Screen name="Pay" component={PayScreen} />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigatior;
