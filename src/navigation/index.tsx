import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartMenuScreen from '../screens/StartMenuScreen';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#f7f6f2'},
          headerShadowVisible: false,
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
