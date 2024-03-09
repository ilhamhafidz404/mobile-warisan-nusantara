import React from 'react';

// import {NavigationContainer} from '@react-navigation/native';
// import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Beranda from '../pages/Beranda';
import Account from '../pages/Account';

// icons
import FaIcon from 'react-native-vector-icons/FontAwesome';
import FoundationIcon from 'react-native-vector-icons/Foundation';

const Tab = createBottomTabNavigator();

const Application = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Beranda}
        options={{
          title: 'Beranda',
          headerStyle: {backgroundColor: '#181818'},
          headerTintColor: '#fff',
          tabBarActiveTintColor: '#ef4444',
          tabBarIcon: ({focused}) => (
            <FoundationIcon
              name={focused ? 'home' : 'home'}
              size={20}
              color={focused ? '#ef4444' : '#b3b3b3'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          title: 'Akun',
          headerStyle: {backgroundColor: '#181818'},
          headerTintColor: '#fff',
          tabBarActiveTintColor: '#ef4444',
          tabBarIcon: ({focused}) => (
            <FaIcon
              name={focused ? 'user-circle' : 'user-circle-o'}
              size={20}
              color={focused ? '#ef4444' : '#b3b3b3'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Application;
