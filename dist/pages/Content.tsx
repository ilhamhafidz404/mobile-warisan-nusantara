import {View, Text} from 'react-native';
import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {BorderlessButton} from 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();

const Hello = () => {
  return (
    <>
      <View>
        <Text
          style={{
            fontWeight: '400',
            color: '#111',
            textAlign: 'center',
            marginTop: 100,
          }}>
          Coming Soon
        </Text>
        <Text
          style={{
            fontWeight: '400',
            color: '#111',
            textAlign: 'center',
          }}>
          Please support ALOPE on GEMASTIK competition
        </Text>
      </View>
    </>
  );
};

export default function Content() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {backgroundColor: '#e63946'},
      }}>
      <Tab.Screen name="Berita" component={Hello} />
      <Tab.Screen name="Event" component={Hello} />
    </Tab.Navigator>
  );
}
