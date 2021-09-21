import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import TrackTabScreen from '../screens/TrackTabScreen';
import RunsTabScreen from '../screens/RunsTabScreen';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen
        name="Root"
        component={TopTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const TopTab = createMaterialTopTabNavigator();

function TopTabNavigator() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen
        name="TrackTab"
        component={TrackTabScreen}
        options={{ title: 'Track' }}
      />
      <TopTab.Screen
        name="RunsTab"
        component={RunsTabScreen}
        options={{ title: 'Runs' }}
      />
    </TopTab.Navigator>
  );
}
