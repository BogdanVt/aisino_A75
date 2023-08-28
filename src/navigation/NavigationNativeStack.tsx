/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreditCardScreen from '../screens/CreditCardScreen/CreditCardScreen';
import BottomTabsNavigatior from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

export const NavigationNativeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomTabs"
      screenOptions={{
        headerShown: false,
        animation: 'fade_from_bottom',
      }}>
      <Stack.Screen
        name="CreditCardScreen"
        component={CreditCardScreen}
        options={{
          headerShown: true,
          headerTitle: 'Top up Wallet',
          headerTitleStyle: {
            fontFamily: 'Geologica_Auto-Medium',
          },
          headerTitleAlign: 'center',
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="BottomTabs" component={BottomTabsNavigatior} />
    </Stack.Navigator>
  );
};
