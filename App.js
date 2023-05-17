import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import StartMapScreen from "./screens/StarMap";
import DailyPicScreen from "./screens/DailyPic";
import SpaceCraftScreen from "./screens/SpaceCraft";
import OnBoardingScreen from "./screens/OnBoarding";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OBS" screenOptions={{
        headerMode: 'screen',
        headerStyle: { backgroundColor: 'grey' },
        headerTitleStyle: {color: 'black', fontSize: 25},
        leftButtonStyle: {color: 'white', fontSize: 25}

      }}
      >
        <Stack.Screen name="OBS" options={{
          headerShown: false
        }} component={OnBoardingScreen} />

        <Stack.Screen name="Home" options={{
          headerShown: false,
          title: 'Home'
        }} component={HomeScreen} />

        <Stack.Screen name="StarMap" options={{
          headerShown: true,
          title: 'Star Map'
        }} component={StartMapScreen} />

        <Stack.Screen name="DailyPic" options={{
          headerShown: true,
          title: 'Daily Picture'
        }} component={DailyPicScreen} />

        <Stack.Screen name="SpaceCraft" options={{
          headerShown: true,
          title: 'Space Craft'
        }} component={SpaceCraftScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;