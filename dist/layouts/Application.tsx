import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Beranda from '../pages/Beranda';

// icons
import FaIcon from 'react-native-vector-icons/FontAwesome';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Content from '../pages/Content';

const Tab = createBottomTabNavigator();

const Application = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Beranda}
        options={{
          title: 'Beranda',
          headerStyle: {backgroundColor: '#fff'},
          headerTintColor: '#D63447',
          tabBarActiveTintColor: '#ef4444',
          tabBarIcon: ({focused}) => (
            <FoundationIcon
              name={focused ? 'home' : 'home'}
              size={20}
              color={focused ? '#ef4444' : '#b3b3b3'}
            />
          ),
          headerRight: () => (
            <FaIcon
              name="bell-o"
              color="#D63447"
              size={20}
              style={{
                marginRight: 10,
              }}
              onPress={() => {}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Content"
        component={Content}
        options={{
          title: 'Konten',
          headerStyle: {backgroundColor: '#fff'},
          headerTintColor: '#D63447',
          tabBarActiveTintColor: '#ef4444',
          tabBarIcon: ({focused}) => (
            <IonIcon
              name={focused ? 'newspaper' : 'newspaper'}
              size={20}
              color={focused ? '#ef4444' : '#b3b3b3'}
            />
          ),
          headerRight: () => (
            <FaIcon
              name="bell-o"
              color="#D63447"
              size={20}
              style={{
                marginRight: 10,
              }}
              onPress={() => {}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Application;
