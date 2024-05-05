import {View, Text} from 'react-native';
import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Hello = () => {
  return (
    <>
      <Text>Hello</Text>
    </>
  );
};

export default function Content() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="helo" component={Hello} />
      <Tab.Screen name="helo2" component={Hello} />
    </Tab.Navigator>
  );
}
